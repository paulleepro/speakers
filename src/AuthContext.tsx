import React, { createContext, FC } from "react";
// import Keycloak from "keycloak-js";

import { Auth, eventHandler } from "Auth";

export interface IAuthContext {
  // keycloak: Keycloak.KeycloakInstance;
  auth: Auth;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: FC = ({ children }) => {
  // const keycloak = Keycloak({
  //   realm: process.env.ENDEAVOR_KEYCLOAK_REALM || "endeavor-speakers",
  //   url: process.env.ENDEAVOR_KEYCLOAK_URL || "http://localhost:30080/auth/",
  //   clientId:
  //     process.env.ENDEAVOR_KEYCLOAK_CLIENT_ID || "endeavor-speakers-frontend",
  // });

  // eslint-disable-next-line
  console.log(`>>> NEW AUTH CONTEXT`);
  const auth = new Auth(eventHandler);
  auth.init();

  return (
    // <AuthContext.Provider value={{ keycloak }}>{children}</AuthContext.Provider>
    <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>
  );
};
