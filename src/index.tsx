import React from "react";
import { hydrate, render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "styles/global-styles";
import App from "App";
import ScrollToTop from "components/ScrollTop";
import { ScreenClassProvider, setConfiguration } from "react-grid-system";
import { AuthProvider } from "AuthContext";

setConfiguration({
  gutterWidth: 24,
  breakpoints: [767, 1023, 1439, 1600, 2000],
  // @ts-ignore
  maxScreenClass: "lg",
});

const FullApp = () => (
  <Router>
    <GlobalStyles />
    <ScrollToTop />
    <ScreenClassProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ScreenClassProvider>
  </Router>
);

const rootElement = document.getElementById("root");
if (rootElement?.hasChildNodes()) {
  hydrate(<FullApp />, rootElement);
} else {
  render(<FullApp />, rootElement);
}
