import React, { lazy } from "react";
import { hydrate, render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "AuthContext";
import LazyWrapper from "components/LazyWrapper";

const App = lazy(() => import("App"));
const GlobalStyles = lazy(() => import("styles/global-styles"));
const ScrollToTop = lazy(() => import("components/ScrollTop"));

const FullApp = () => (
  <Router>
    <LazyWrapper>
      <GlobalStyles />
      <ScrollToTop />
      <AuthProvider>
        <App />
      </AuthProvider>
    </LazyWrapper>
  </Router>
);

const rootElement = document.getElementById("root");
if (rootElement?.hasChildNodes()) {
  hydrate(<FullApp />, rootElement);
} else {
  render(<FullApp />, rootElement);
}
