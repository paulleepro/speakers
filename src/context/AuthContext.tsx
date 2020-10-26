import { Auth } from "aws-amplify";
import React, { createContext, FC, useCallback } from "react";
import { useQueryCache } from "react-query";
import FullPageErrorFallback from "../components/FullPageErrorFallback";

import Loader from "../components/Loader";
import { useAsync } from "../hooks/useAsync";

export interface IAuthContext {
  isAuthenticated: boolean;
  bearerToken?: string;
  refreshCognitoUser: () => Promise<any>;
  signup: (o: {
    email?: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => Promise<any>;
  confirmSignup: (o: { email: string; code: string }) => Promise<any>;
  resendSignup: (o: { email: string }) => Promise<any>;
  login: (o: { email: string; password: string }) => Promise<any>;
  logout: () => Promise<any>;
  forgotPassword: (o: { email: string }) => Promise<any>;
  forgotPasswordSubmit: (o: {
    email: string;
    code: string;
    password: string;
  }) => Promise<any>;
  changePassword: (o: {
    oldPassword: string;
    newPassword: string;
  }) => Promise<any>;
  updateUserAttributes: (attributes: object) => Promise<any>;
  deleteAccount: () => Promise<any>;
}

async function bootstrapAppData() {
  try {
    const cognitoUser = await Auth.currentAuthenticatedUser();
    return cognitoUser;
  } catch (err) {
    return null;
  }
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);
AuthContext.displayName = "AuthContext";

export const AuthProvider: FC = ({ children }) => {
  const {
    data: cognitoUser,
    status,
    error,
    isLoading,
    isIdle,
    isError,
    isSuccess,
    run,
    setData: setCognitoUser,
  } = useAsync();
  const queryCache = useQueryCache();

  React.useEffect(() => {
    const appDataPromise = bootstrapAppData();
    run(appDataPromise);
  }, [run]);

  const refreshCognitoUser = useCallback(
    () =>
      Auth.currentAuthenticatedUser({ bypassCache: true }).then((response) => {
        setCognitoUser(response);
        return response;
      }),
    [setCognitoUser]
  );

  const signup = useCallback(
    ({ email, password, firstName, lastName }) =>
      Auth.signUp({
        username: email,
        password,
        attributes: { given_name: firstName, family_name: lastName },
      }).then((response) => {
        setCognitoUser(response.user);
        return response;
      }),
    [setCognitoUser]
  );

  const confirmSignup = useCallback(
    ({ email, code }) =>
      Auth.confirmSignUp(email, code).then((data) => {
        setCognitoUser(null);
        return data;
      }),
    [setCognitoUser]
  );

  const resendSignup = useCallback(({ email }) => Auth.resendSignUp(email), []);

  const login = useCallback(
    ({ email, password }) =>
      Auth.signIn(email, password).then((cognitoUser) => {
        setCognitoUser(cognitoUser);
        return cognitoUser;
      }),
    [setCognitoUser]
  );

  const logout = useCallback(
    () =>
      Auth.signOut().then((data) => {
        setCognitoUser(null);
        queryCache.clear();
        return data;
      }),
    [setCognitoUser, queryCache]
  );

  const forgotPassword = useCallback(
    ({ email }) => Auth.forgotPassword(email),
    []
  );

  const forgotPasswordSubmit = useCallback(
    ({ email, code, password }) =>
      Auth.forgotPasswordSubmit(email, code, password),
    []
  );

  const changePassword = useCallback(
    ({ oldPassword, newPassword }) =>
      Auth.currentAuthenticatedUser().then((user) =>
        Auth.changePassword(user, oldPassword, newPassword)
      ),
    []
  );

  const updateUserAttributes = useCallback(
    (attributes) =>
      Auth.currentAuthenticatedUser()
        .then((user) => Auth.updateUserAttributes(user, attributes))
        .then(() => Auth.currentAuthenticatedUser())
        .then((user) => setCognitoUser(user)),
    [setCognitoUser]
  );

  const deleteAccount = useCallback(
    () =>
      Auth.currentAuthenticatedUser()
        .then((user) =>
          user.deleteUser(() => {
            // NO-OP - we don't need to do anything in the callback, but it will throw an error if we don't provide one
          })
        )
        .then((data) => {
          setCognitoUser(null);
          return data;
        }),
    [setCognitoUser]
  );

  const bearerToken = cognitoUser?.signInUserSession?.idToken?.jwtToken;

  const value = React.useMemo(
    () => ({
      isAuthenticated: Boolean(bearerToken),
      bearerToken,
      refreshCognitoUser,
      signup,
      confirmSignup,
      resendSignup,
      login,
      logout,
      forgotPassword,
      forgotPasswordSubmit,
      changePassword,
      updateUserAttributes,
      deleteAccount,
    }),
    [
      cognitoUser,
      refreshCognitoUser,
      signup,
      confirmSignup,
      resendSignup,
      login,
      logout,
      forgotPassword,
      forgotPasswordSubmit,
      changePassword,
      updateUserAttributes,
      deleteAccount,
    ]
  );

  if (isLoading || isIdle) {
    return <Loader />;
  }

  if (isError) {
    return <FullPageErrorFallback error={error} />;
  }

  if (isSuccess) {
    return (
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
  }

  throw new Error(`Unhandled status: ${status}`);
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      "useAuth hook must be used within a AuthProvider component"
    );
  }
  return context;
};
