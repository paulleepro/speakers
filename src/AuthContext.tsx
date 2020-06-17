import React, { createContext, FC } from "react";

import { Auth, eventHandler } from "Auth";

export interface IAuthContext {
  auth: Auth;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: FC = ({ children }) => {
  // eslint-disable-next-line
  const auth = new Auth(eventHandler);
  auth.init();

  return (
    <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>
  );
};
