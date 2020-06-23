import React, { createContext, FC, useState } from "react";
import Cookies from "universal-cookie";
import { COOKIE_NAME } from "pages/PasswordProtection";

export interface IAuthContext {
  setAuthenticated: (val: boolean) => void;
  authenticated: boolean;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: FC = ({ children }) => {
  const cookies = new Cookies();
  const [authenticated, setAuthenticated] = useState(
    cookies.get(COOKIE_NAME) === "ok"
  );

  // eslint-disable-next-line
  return (
    <AuthContext.Provider value={{ setAuthenticated, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
