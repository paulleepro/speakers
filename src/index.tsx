import React from "react";
import { hydrate, render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "styles/global-styles";
import App from "App";
import ScrollToTop from "components/ScrollTop";
import { AuthProvider } from "AuthContext";

const FullApp = () => (
  <Router>
    <GlobalStyles />
    <ScrollToTop />
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>
);

const rootElement = document.getElementById("root");
if (rootElement?.hasChildNodes()) {
  hydrate(<FullApp />, rootElement);
} else {
  render(<FullApp />, rootElement);
}
