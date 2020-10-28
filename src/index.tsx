import "stop-runaway-react-effects/hijack";

import React, { lazy } from "react";
import Amplify from "aws-amplify";
import { hydrate, render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { SiteBasicAuthProvider } from "./context/SiteBasicAuthContext";
import LazyWrapper from "components/LazyWrapper";
import { AuthProvider } from "context/AuthContext";
import { ReactQueryCacheProvider, QueryCache } from "react-query";
import { ErrorProvider } from "./context/ErrorContext";
import { ReactQueryDevtools } from "react-query-devtools";

const App = lazy(() => import("App"));
const GlobalStyles = lazy(() => import("styles/global-styles"));
const ScrollToTop = lazy(() => import("components/ScrollTop"));

Amplify.configure({
  Auth: {
    region: process.env.REACT_APP_AMPLIFY_AUTH_REGION,
    userPoolId: process.env.REACT_APP_AMPLIFY_AUTH_USERPOOLID,
    userPoolWebClientId: process.env.REACT_APP_AMPLIFY_AUTH_USERPOOLWEBCLIENTID,
  },
});

const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const FullApp = () => (
  <ReactQueryCacheProvider queryCache={queryCache}>
    <ReactQueryDevtools initialIsOpen={false} />
    <Router>
      <LazyWrapper>
        <GlobalStyles />
        <ScrollToTop />
        <SiteBasicAuthProvider>
          <AuthProvider>
            <ErrorProvider>
              <App />
            </ErrorProvider>
          </AuthProvider>
        </SiteBasicAuthProvider>
      </LazyWrapper>
    </Router>
  </ReactQueryCacheProvider>
);

const rootElement = document.getElementById("root");
if (rootElement?.hasChildNodes()) {
  hydrate(<FullApp />, rootElement);
} else {
  render(<FullApp />, rootElement);
}
