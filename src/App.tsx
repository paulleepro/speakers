import React, { ReactElement, useContext } from "react";
import styled from "styled-components/macro";
import { Box } from "react-basic-blocks";
import { Route, Switch } from "react-router";
import AppHeader from "components/AppHeader";
import Landing from "pages/Landing";
import Footer from "components/Footer";
import HowItWorks from "pages/HowItWorks";
import Explore from "pages/Explore";
import Talent from "pages/Talent";
import TalentBooking from "pages/TalentBooking";
import Confirmation from "pages/Confirmation";
import { TopRightSemi } from "styles/components";
import Topics from "pages/TopicList";
import Subtopic from "pages/Subtopic";
import Type from "pages/Type";
import FAQ from "pages/FAQ";
import SearchResults from "pages/SearchResults";
import { AuthContext } from "AuthContext";
import PasswordProtection from "pages/PasswordProtection";

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

const App = (): ReactElement => {
  const { authenticated } = useContext(AuthContext);

  if (!authenticated && navigator.userAgent !== "ReactSnap") {
    return <PasswordProtection />;
  }

  return (
    <>
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
            <Route
              path="/talent/:slug/booking"
              component={TalentBooking}
              exact
            />
            <Route path="/talent/:slug" component={Talent} exact />
            <Route path="/type/:slug" component={Type} exact />
            <Route path="/subtopic/:slug" component={Subtopic} exact />
            <Route path="/topic" component={Topics} exact />
            <Route path="/explore" component={Explore} exact />
            <Route path="/how-it-works" component={HowItWorks} exact />
            <Route path="/faq" component={FAQ} exact />
            <Route path="/search-results" component={SearchResults} exact />
            <Route path="/" component={Landing} exact />

            <Route render={() => <Box padding="20px">Not found</Box>} />
          </Switch>
        </div>
        <Footer />
      </Wrapper>
    </>
  );
};

export default App;
