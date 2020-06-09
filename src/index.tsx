import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "styles/global-styles";
import App from "App";
import { ScreenClassProvider } from "react-grid-system";
import { setConfiguration } from "react-grid-system";

setConfiguration({
  gutterWidth: 24,
  breakpoints: [767, 1023, 1439, 1600, 2000],
});

ReactDOM.render(
  <Router>
    <GlobalStyles />
    <ScreenClassProvider>
      <App />
    </ScreenClassProvider>
  </Router>,
  document.getElementById("root")
);
