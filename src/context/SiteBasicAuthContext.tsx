import React, { createContext, FC, useState } from "react";
import Cookies from "universal-cookie";
import { COOKIE_NAME } from "pages/PasswordProtection";

export interface ISiteBasicAuthContext {
  setAuthenticated: (val: boolean) => void;
  authenticated: boolean;
}

export const SiteBasicAuthContext = createContext<ISiteBasicAuthContext>(
  {} as ISiteBasicAuthContext
);

export const SiteBasicAuthProvider: FC = ({ children }) => {
  const cookies = new Cookies();
  const [authenticated, setAuthenticated] = useState(
    cookies.get(COOKIE_NAME) === "ok"
  );

  return (
    <SiteBasicAuthContext.Provider value={{ setAuthenticated, authenticated }}>
      {children}
    </SiteBasicAuthContext.Provider>
  );
};

export const useSiteBasicAuth = () => {
  const context = React.useContext(SiteBasicAuthContext);
  if (context === undefined) {
    throw new Error(
      "useSiteBasicAuth hook must be used within a SiteBasicAuthProvider component"
    );
  }
  return context;
};
