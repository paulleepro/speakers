import React, { ReactElement } from "react";
import styled from "styled-components/macro";
import { Box } from "react-basic-blocks";
import { Route, Switch } from "react-router";
import AppHeader from "components/AppHeader";
import Landing from "components/Landing";
import Footer from "components/Footer";
import HowItWorks from "components/HowItWorks";
import Explore from "components/Explore";
import Talent from "components/Talent";
import TalentBooking from "components/TalentBooking";
import Confirmation from "components/Confirmation";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  .max-width-container {
    min-height: calc(100vh - 64px);
    align-self: center;
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
  }
`;

const App = (): ReactElement => (
  <>
    <Wrapper>
      <AppHeader />
      <div className="max-width-container">
        <Switch>
          <Route
            path="/talent/:slug/confirmation"
            component={Confirmation}
            exact
          />
          <Route path="/talent/:slug/booking" component={TalentBooking} exact />
          <Route path="/talent/:slug" component={Talent} exact />
          <Route path="/explore" component={Explore} exact />
          <Route path="/how-it-works" component={HowItWorks} exact />
          <Route path="/" component={Landing} exact />

          <Route render={() => <Box padding="20px">Not found</Box>} />
        </Switch>
      </div>
      <Footer />
    </Wrapper>
  </>
);

export default App;
