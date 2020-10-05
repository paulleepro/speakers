import React, { ReactElement, useContext, useEffect, lazy } from "react";
import styled from "styled-components/macro";
import { Box } from "react-basic-blocks";
import { Route, Switch, useLocation } from "react-router";
import { TopRightSemi } from "styles/components";
import { AuthContext } from "AuthContext";

const AppHeader = lazy(() => import("components/AppHeader"));
const Confirmation = lazy(() => import("pages/Confirmation"));
const FAQ = lazy(() => import("pages/FAQ"));
const Explore = lazy(() => import("pages/Explore"));
const Favorites = lazy(() => import("pages/Favorites"));
const Footer = lazy(() => import("components/Footer"));
const HowItWorks = lazy(() => import("pages/HowItWorks"));
const Landing = lazy(() => import("pages/Landing"));
const PasswordProtection = lazy(() => import("pages/PasswordProtection"));
const SearchResults = lazy(() => import("pages/SearchResults"));
const Subtopic = lazy(() => import("pages/Subtopic"));
const Talent = lazy(() => import("pages/Talent"));
const TalentBooking = lazy(() => import("pages/TalentBooking"));
const Topics = lazy(() => import("pages/TopicList"));
const Type = lazy(() => import("pages/Type"));

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  .max-width-container {
    overflow: hidden;
    min-height: calc(100vh - 64px);
    align-self: center;
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
  }
`;

declare global {
  interface Window {
    analytics: any;
  }
}

const usePageViews = () => {
  const location = useLocation();
  useEffect(() => {
    window.analytics.page(location.pathname);
  }, [location]);
};

const App = (): ReactElement => {
  usePageViews();
  const { authenticated } = useContext(AuthContext);

  if (!authenticated && navigator.userAgent !== "ReactSnap") {
    return <PasswordProtection />;
  }

  return (
    <Wrapper>
      <AppHeader />
      <div className="max-width-container">
        <TopRightSemi />
        <Switch>
          <Route
            path="/talent/:slug/confirmation"
            component={Confirmation}
            exact
          />
          <Route path="/talent/:slug/booking" component={TalentBooking} exact />
          <Route path="/talent/:slug" component={Talent} exact />
          <Route path="/type/:slug" component={Type} exact />
          <Route path="/subtopic/:slug" component={Subtopic} exact />
          <Route path="/topic" component={Topics} exact />
          <Route path="/explore" component={Explore} exact />
          <Route path="/how-it-works" component={HowItWorks} exact />
          <Route path="/favorites" component={Favorites} exact />
          <Route path="/faq" component={FAQ} exact />
          <Route path="/search-results" component={SearchResults} exact />
          <Route path="/" component={Landing} exact />

          <Route render={() => <Box padding="20px">Not found</Box>} />
        </Switch>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default App;
