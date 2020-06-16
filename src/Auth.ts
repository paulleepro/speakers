// KEYCLOAK AUTH SETUP

import Keycloak from "keycloak-js";
import queryString from "query-string";
import { config } from "config";

export enum AuthEvents {
  INVITE_ERROR = "invite_error",
  TOKEN_REFRESHED = "token_refreshed",
  TOKEN_STILL_VALID = "token_still_valid",
  TOKEN_INVALID = "token_invalid",
  TOKENS = "tokens",
  AUTHENTICATED = "authenticated",
  NOT_AUTHENTICATED = "not_authenticated",
}

export class Auth {
  public keycloak: Keycloak.KeycloakInstance;
  public userProfile: any;
  public tokens: any = {};
  public tokensBase64 = "";

  private authenticated = false;
  private keycloakConfig: any;

  constructor(private eventHandler?: Function) {
    this.keycloak = Keycloak({
      realm: process.env.ENDEAVOR_KEYCLOAK_REALM || "endeavor-speakers",
      url: process.env.ENDEAVOR_KEYCLOAK_URL || "http://localhost:30080/auth/",
      clientId:
        process.env.ENDEAVOR_KEYCLOAK_CLIENT_ID || "endeavor-speakers-frontend",
    });
  }

  public init() {
    this.handleInvite();
  }

  public isAuthenticated(): boolean {
    return this.authenticated;
  }

  public token() {
    return this.keycloak.token;
  }

  public login(username: string, password: string) {
    return fetch(`${config.speakersAuthUrl}/v1/auth/tokens/grant`, {
      method: "POST",
      body: JSON.stringify({ username, password, encode: "base64" }),
      headers: { "Content-Type": "application/json" },
    })
      .then(async (res: any) => {
        if (res.ok) {
          const data = await res.json();
          return this.initWithToken(data.token);
        }
      })
      .catch(() => {
        this.setNotAuthenticated();
      })
      .then(() => {
        return this;
      });
  }

  public passwordLogin(password: string) {
    return fetch(`${config.speakersAuthUrl}/v1/auth/tokens/password-auth`, {
      method: "POST",
      body: JSON.stringify({ password }),
      headers: { "Content-Type": "application/json" },
    })
      .then(async (res: any) => {
        if (res.ok) {
          const data = await res.json();
          return this.initWithToken(data.token);
        }
      })
      .catch(() => {
        this.setNotAuthenticated();
      })
      .then(() => {
        return this;
      });
  }

  public handleInvite() {
    const qs: any = queryString.parse(window.location.search);

    if (qs.invite === "jwt" && qs.token) {
      return this.initWithToken(qs.token);
    } else {
      return false;
    }
  }

  public loginWithToken(token: string) {
    return this.initWithToken(token);
  }

  public logout() {
    this.setNotAuthenticated();
  }

  protected setNotAuthenticated() {
    if (this.isAuthenticated()) {
      this.keycloak.clearToken();
    }

    this.authenticated = false;
    this.userProfile = undefined;
    this.tokens = {};
    this.tokensBase64 = "";
  }

  protected initWithToken(token: string) {
    this.setNotAuthenticated();

    try {
      const jsonToken: string = window.atob(token);
      const jwt = JSON.parse(jsonToken);

      const options: any = {
        onLoad: "check-sso",
        promiseType: "native",
        token: (jwt.token || jwt.access_token) as string,
        refreshToken: jwt.refreshToken || jwt.refresh_token,
        idToken: (jwt.idToken || jwt.id_token) as string,
        redirectUri: window.location.href.split("?")[0],
        enableLogging: true,
        timeSkew: undefined,
        // interval is in seconds and 5 is the default in the lib
        checkLoginIframeInterval: process.env
          .ENDEAVOR_KEYCLOAK_TOKEN_REFRESH_INTERVAL
          ? Number(process.env.ENDEAVOR_KEYCLOAK_TOKEN_REFRESH_INTERVAL)
          : 30,
        // if we check login with Iframe it invalidates the token
        checkLoginIframe: false,
      };

      this.keycloakConfig = options;

      this.keycloak.onReady = this.onKeycloakEvent("onReady");
      this.keycloak.onAuthSuccess = this.onKeycloakEvent("onAuthSuccess");
      this.keycloak.onAuthError = this.onKeycloakErrorEvent("onAuthError");
      this.keycloak.onAuthRefreshSuccess = this.onKeycloakEvent(
        "onAuthRefreshSuccess"
      );
      this.keycloak.onAuthRefreshError = this.onKeycloakErrorEvent(
        "onAuthRefreshError"
      );
      this.keycloak.onAuthLogout = this.onKeycloakEvent("onAuthLogout");
      this.keycloak.onTokenExpired = this.onKeycloakRefreshToken(
        "onTokenExpired"
      );

      return this.keycloak.init(options);
    } catch (error) {
      // console.log(`Error processing invite: ${error}`);
      if (this.eventHandler) {
        this.eventHandler(AuthEvents.INVITE_ERROR, { error }, this);
        this.eventHandler(AuthEvents.NOT_AUTHENTICATED, { error }, this);
      }
    }
  }

  // workaround for when we do not have the login Iframe refresh
  private keycloakRefreshToken = () => {
    window.setInterval(() => {
      this.keycloak
        .updateToken(0)
        .then((refreshed) => {
          this.authenticated = true;

          this.onKeycloakTokens();

          if (refreshed) {
            // console.log(">>> Token was successfully refreshed");
            if (this.eventHandler) {
              this.eventHandler(AuthEvents.TOKEN_REFRESHED, {}, this);
            }
          } else {
            // console.log("Token is still valid");
            if (this.eventHandler) {
              this.eventHandler(AuthEvents.TOKEN_STILL_VALID, {}, this);
            }
          }
        })
        .catch(() => {
          // console.log(
          //   "Failed to refresh the token, or the session has expired"
          // );
          this.setNotAuthenticated();

          if (this.eventHandler) {
            this.eventHandler(AuthEvents.TOKEN_INVALID, {}, this);
          }
        });
    }, (this.keycloakConfig.checkLoginIframeInterval || 30) * 1000);
  };

  private onKeycloakEvent = (event: string) => () => {
    this.onKeycloakEventHandler(event);

    if (this.keycloak.token !== this.tokens.access_token) {
      this.onKeycloakTokens();
    }
  };

  private onKeycloakErrorEvent = (event: string) => (error?: any) => {
    this.onKeycloakEventHandler(event, error);
  };

  private onKeycloakRefreshToken = (event: string) => () => {
    this.onKeycloakEventHandler(event);

    if (this.keycloakConfig.checkLoginIframe !== false) {
      this.keycloak.updateToken(5);
    }
  };

  private onKeycloakEventHandler = (event: any, error?: any) => {
    if (event === "onReady" && this.keycloakConfig.checkLoginIframe === false) {
      this.keycloakRefreshToken();
    }

    switch (event) {
      case "onAuthSuccess":
      case "onAuthRefreshSuccess":
        this.authenticated = true;

        if (this.eventHandler) {
          this.eventHandler(AuthEvents.AUTHENTICATED, {}, this);
        }
        break;
      case "onAuthError":
      case "onAuthRefreshError":
      case "onTokenExpired":
      case "onAuthLogout":
        this.setNotAuthenticated();

        if (this.eventHandler) {
          this.eventHandler(AuthEvents.NOT_AUTHENTICATED, { error }, this);
        }
        break;
    }
  };

  private onKeycloakTokens = () => {
    // to be used as as a test to see if the token is actually valid and auth server reachable
    this.tokens = {
      access_token: this.keycloak.token,
      id_token: this.keycloak.idToken,
      refresh_token: this.keycloak.refreshToken,
    };
    this.tokensBase64 = window.btoa(JSON.stringify(this.tokens));

    // console.log(`>>> SAME TOKEN: ${newTokens.access_token === tokens}`);
    // console.log(">>> TOKENS Base64: ", window.btoa(JSON.stringify(newTokens)));

    if (this.eventHandler) {
      this.loadUserProfile().then((userProfile: any) => {
        this.userProfile = userProfile;

        if (this.eventHandler) {
          this.eventHandler(
            AuthEvents.TOKENS,
            {
              token: this.tokens.access_token,
              tokens: this.tokens,
              tokensBase64: this.tokensBase64,
              userProfile,
            },
            this
          );
        }
      });
    }
  };

  public async loadUserProfile(): Promise<any> {
    return this.keycloak
      .loadUserProfile()
      .then(function (profile) {
        return profile;
      })
      .catch(function () {
        return;
      });
  }

  public onAuthRefreshError = () => {
    return;
  };
}

export function eventHandler(event: any, payload: any, auth: Auth) {
  // console.log(
  //   `eventHandler: event=${event} isAuthenticated=${
  //     auth.isAuthenticated
  //   } userProfile:${JSON.stringify(auth.userProfile, null, 2)}`
  // );

  switch (event) {
    case AuthEvents.AUTHENTICATED:
      // USER IS AUTHENTICATED
      if (payload.userProfile) {
        // console.log(
        //   `user profile: ${JSON.stringify(payload.userProfile, null, 2)}`
        // );
      } else {
        // console.log(`no user profile`);
      }
      break;
    case AuthEvents.NOT_AUTHENTICATED:
      // USER IS NOT AUTHENTICATED
      // console.log(`user not authenticated`);
      break;

    // OTHER EVENTS
    case AuthEvents.INVITE_ERROR:
      // USER IS NOT LOGGED IN
      // console.log(`invite error: ${payload.error}`);
      break;
    case AuthEvents.TOKEN_REFRESHED:
      // USER IS LOGGED IN
      // console.log(`token refreshed`);
      break;
    case AuthEvents.TOKEN_STILL_VALID:
      // USER IS LOGGED IN
      // console.log(`token still valid`);
      break;
    case AuthEvents.TOKEN_INVALID:
      // USER IS NOT LOGGED IN
      // console.log(`token invalid`);
      break;
    case AuthEvents.TOKENS:
      // console.log(`tokens: ${JSON.stringify(payload.tokens, null, 2)}`);
      // console.log(`tokensBase64: ${payload.tokensBase64}`);

      // if (payload.userProfile) {
      //   console.log(
      //     `user profile: ${JSON.stringify(payload.userProfile, null, 2)}`
      //   );
      // } else {
      //   console.log(`no profile from tokens`);
      // }
      break;
    default:
      break;
  }
}
