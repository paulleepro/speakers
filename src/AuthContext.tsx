import React, { createContext, FC, useState } from "react";

import { Auth, AuthEvents } from "Auth";

export interface IAuthContext {
  auth: Auth;
  authenticated: boolean;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: FC = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  function eventHandler(event: any, payload: any, auth: Auth) {
    switch (event) {
      case AuthEvents.AUTHENTICATED:
        // USER IS AUTHENTICATED
        console.log(`AUTHENTICATED: ${payload.auth.isAuthenticated()}`);
        setAuthenticated(payload.auth.isAuthenticated());
        break;
      case AuthEvents.NOT_AUTHENTICATED:
        // USER IS NOT AUTHENTICATED
        console.log(`user not authenticated`);
        setAuthenticated(false);
        break;
    }
  }

  // eslint-disable-next-line
  const auth = new Auth(eventHandler);
  auth.init();

  return (
    <AuthContext.Provider value={{ auth, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
