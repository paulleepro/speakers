import React, { createContext, FC, useState } from "react";
import Keycloak from "keycloak-js";
import { setKCEventHandlers } from "auth-helpers";

export interface IAuthContext {
  keycloak: Keycloak.KeycloakInstance;
  latestEventDate: string;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: FC = ({ children }) => {
  const [latestEventDate, setLatestEventDate] = useState<string>(
    `${Date.now()}`
  );
  const keycloak = Keycloak({
    realm: process.env.ENDEAVOR_KEYCLOAK_REALM || "endeavor-speakers",
    url: process.env.ENDEAVOR_KEYCLOAK_URL || "/auth/",
    clientId:
      process.env.ENDEAVOR_KEYCLOAK_CLIENT_ID || "endeavor-speakers-frontend",
  });
  setKCEventHandlers(keycloak, setLatestEventDate);

  return (
    <AuthContext.Provider value={{ keycloak, latestEventDate }}>
      {children}
    </AuthContext.Provider>
  );
};
