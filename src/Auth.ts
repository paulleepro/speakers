// KEYCLOAK AUTH SETUP

import Keycloak from "keycloak-js";
import queryString from "query-string";

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
  public keycloakProviderInitConfig: Keycloak.KeycloakInitOptions;
  public keycloak: Keycloak.KeycloakInstance;
  public isAuthenticated = false;
  public userProfile: any;

  constructor(private eventHandler?: Function) {
    this.keycloakProviderInitConfig = this.generateKeycloakInitOptions();
    this.keycloak = Keycloak({
      realm: process.env.ENDEAVOR_KEYCLOAK_REALM || "endeavor-speakers",
      url: process.env.ENDEAVOR_KEYCLOAK_URL || "http://localhost:30080/auth/",
      clientId:
        process.env.ENDEAVOR_KEYCLOAK_CLIENT_ID || "endeavor-speakers-frontend",
    });
  }

  protected generateKeycloakInitOptions(): Keycloak.KeycloakInitOptions {
    this.isAuthenticated = false;

    const options: Keycloak.KeycloakInitOptions = {
      onLoad: "check-sso" as Keycloak.KeycloakOnLoad,
    };

    const qs = queryString.parse(window.location.search);

    try {
      if (qs.invite === "jwt" && qs.token) {
        const jsonToken: string = window.atob(qs.token as string);
        const jwt = JSON.parse(jsonToken);

        options.token = (jwt.token || jwt.access_token) as string;
        options.refreshToken = (jwt.refreshToken ||
          jwt.refresh_token) as string;
        options.idToken = (jwt.idToken || jwt.id_token) as string;
        options.redirectUri = window.location.href.split("?")[0];
        options.enableLogging = true;
        options.timeSkew = undefined;
        // interval is in seconds and 5 is the default in the lib
        options.checkLoginIframeInterval = process.env
          .ENDEAVOR_KEYCLOAK_TOKEN_REFRESH_INTERVAL
          ? Number(process.env.ENDEAVOR_KEYCLOAK_TOKEN_REFRESH_INTERVAL)
          : 30;
        // if we check login with Iframe it invalidates the token
        options.checkLoginIframe = false;
      }
    } catch (error) {
      // TODO: notify error?
      // console.log(`Error processing invite: ${error}`);
      if (this.eventHandler) {
        this.eventHandler(AuthEvents.INVITE_ERROR, { error }, this);
        this.eventHandler(AuthEvents.NOT_AUTHENTICATED, { error }, this);
      }
    }

    return options;
  }

  // workaround for when we do not have the login Iframe refresh
  private keycloakRefreshToken = () => {
    window.setInterval(() => {
      this.keycloak
        .updateToken(0)
        .then((refreshed) => {
          this.isAuthenticated = true;

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
          this.isAuthenticated = false;
          if (this.eventHandler) {
            this.eventHandler(AuthEvents.TOKEN_INVALID, {}, this);
          }
        });
    }, (this.keycloakProviderInitConfig.checkLoginIframeInterval || 30) * 1000);
  };

  public onKeycloakEvent = (event: any, error: any) => {
    // console.log(`>>> EVENT: ${event} error=${error}`);
    if (
      event === "onReady" &&
      this.keycloakProviderInitConfig.checkLoginIframe === false
    ) {
      this.keycloakRefreshToken();
    }

    switch (event) {
      case "onAuthSuccess":
      case "onAuthRefreshSuccess":
        this.isAuthenticated = true;

        if (this.eventHandler) {
          this.eventHandler(AuthEvents.AUTHENTICATED, {}, this);
        }
        break;
      case "onAuthError":
      case "onAuthRefreshError":
      case "onTokenExpired":
      case "onAuthLogout":
        this.isAuthenticated = false;

        if (this.eventHandler) {
          this.eventHandler(AuthEvents.NOT_AUTHENTICATED, { error }, this);
        }
        break;
    }
  };

  public onKeycloakTokens = (tokens: any) => {
    // to be used as as a test to see if the token is actually valid and auth server reachable
    // console.log(">>> TOKENS Base64: ", window.btoa(JSON.stringify(tokens)));
    if (this.eventHandler) {
      this.loadUserProfile().then((userProfile: any) => {
        this.userProfile = userProfile;

        if (this.eventHandler) {
          this.eventHandler(AuthEvents.TOKENS, { tokens, userProfile }, this);
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
