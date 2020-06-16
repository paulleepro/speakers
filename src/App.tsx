import React, { ReactElement } from "react";
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
import AboutUs from "pages/AboutUs";
import SearchResults from "pages/SearchResults";
import { Auth, eventHandler } from "Auth";

const auth = new Auth(eventHandler);
// auth.init();
// TODO: remove and use in the form
// auth.loginWithToken(
//   "eyJhY2Nlc3NfdG9rZW4iOiJleUpoYkdjaU9pSlNVekkxTmlJc0luUjVjQ0lnT2lBaVNsZFVJaXdpYTJsa0lpQTZJQ0pxTUZsRlZuVmhNME5ZTWxOVmEwbGFUbDk0WVd4SVdtazVZMDlJVW1wclIwc3hPVUZaUlZCTGVHazRJbjAuZXlKbGVIQWlPakUxT1RJek16QTRNRGNzSW1saGRDSTZNVFU1TWpNeU56SXdOeXdpYW5ScElqb2laREkyWWpaaE9EQXRNRFF5T0MwMFlUVXlMV0UxTmpZdE5qYzVNamd5TXpVNE5XUTRJaXdpYVhOeklqb2lhSFIwY0RvdkwyeHZZMkZzYUc5emREb3pNREE0TUM5aGRYUm9MM0psWVd4dGN5OWxibVJsWVhadmNpMXpjR1ZoYTJWeWN5SXNJbUYxWkNJNld5SmxibVJsWVhadmNpMXpjR1ZoYTJWeWN5MW1jbTl1ZEdWdVpDSXNJbUZqWTI5MWJuUWlYU3dpYzNWaUlqb2lZemt3TXpobVpqTXRNRGM0TnkwME1ERXlMV0ppWkdNdE9UVmlNR0pqWmpRd05UZGlJaXdpZEhsd0lqb2lRbVZoY21WeUlpd2lZWHB3SWpvaVpXNWtaV0YyYjNJdGMzQmxZV3RsY25NdFpuSnZiblJsYm1RaUxDSnpaWE56YVc5dVgzTjBZWFJsSWpvaU5tUmtaVGc0TTJZdE9UZzBPUzAwTVdZeExXSmxNMk10TjJNeFkyVXdNVFUwWlRBd0lpd2lZV055SWpvaU1TSXNJbUZzYkc5M1pXUXRiM0pwWjJsdWN5STZXeUlxSWwwc0luSmxZV3h0WDJGalkyVnpjeUk2ZXlKeWIyeGxjeUk2V3lKMFlXeGxiblJmYldGdVlXZGxjaUlzSW05bVpteHBibVZmWVdOalpYTnpJaXdpZFcxaFgyRjFkR2h2Y21sNllYUnBiMjRpWFgwc0luSmxjMjkxY21ObFgyRmpZMlZ6Y3lJNmV5SmhZMk52ZFc1MElqcDdJbkp2YkdWeklqcGJJbTFoYm1GblpTMWhZMk52ZFc1MElpd2liV0Z1WVdkbExXRmpZMjkxYm5RdGJHbHVhM01pTENKMmFXVjNMWEJ5YjJacGJHVWlYWDE5TENKelkyOXdaU0k2SW05d1pXNXBaQ0JsYldGcGJDQndjbTltYVd4bElpd2laVzFoYVd4ZmRtVnlhV1pwWldRaU9tWmhiSE5sTENKdVlXMWxJam9pVFdGdVlXZGxjaUJVWlhOMElpd2ljSEpsWm1WeWNtVmtYM1Z6WlhKdVlXMWxJam9pYldGdVlXZGxja0IwWlhOMExtTnZiU0lzSW1kcGRtVnVYMjVoYldVaU9pSk5ZVzVoWjJWeUlpd2labUZ0YVd4NVgyNWhiV1VpT2lKVVpYTjBJaXdpWlcxaGFXd2lPaUp0WVc1aFoyVnlRSFJsYzNRdVkyOXRJbjAucW9PTll5eFhOanNOYlM0MmFPNkg3QnY1REhUcFBIMWtsU19YeGVJc2REZ2tkTEoyc2NCTnZlbE41ZVlvazlJaXRFUmV5QVdkbE1VWmtQNlZfUDhFOUdDb0hTdXUyaUJhWWZjckZMWGtBR1lDZll1ci1ha1UwWEo5QzRZU3dINmpfSDFSWmRIOVFhdkw0ZURwV0Z4OVVXLVJXMUpBV01PQW1LMzlQeE1tREQwU1VBanJ6UVpBSzJ6VklPLXpFei1sdFBWUTdoWEx1NHVIaXNZVXJHaXYtVl81QlRQNHlsQ0Jnc3g4b1JlZzhXcENMdUp0VjNXSUc5OEIxRWhjOVRwUjdfdVl3VHBBQV9XakZNVHZGRlZ4V3RiN1NKcnA0OVFSUzJoMmhWYmhMTTVDTW9WY0E4eVNqMDRjR2lTTGNPRzVTX1Q0cHpPZ2RZZm9aLTBrYVpMZUtRIiwiaWRfdG9rZW4iOiJleUpoYkdjaU9pSlNVekkxTmlJc0luUjVjQ0lnT2lBaVNsZFVJaXdpYTJsa0lpQTZJQ0pxTUZsRlZuVmhNME5ZTWxOVmEwbGFUbDk0WVd4SVdtazVZMDlJVW1wclIwc3hPVUZaUlZCTGVHazRJbjAuZXlKbGVIQWlPakUxT1RJek16QTRNRGNzSW1saGRDSTZNVFU1TWpNeU56SXdOeXdpWVhWMGFGOTBhVzFsSWpvd0xDSnFkR2tpT2lJek1EaGpaRGxsTlMwek1HUXlMVFF3TVdFdFlUSTFNaTA0WWpWak1EZzROMk13WWpjaUxDSnBjM01pT2lKb2RIUndPaTh2Ykc5allXeG9iM04wT2pNd01EZ3dMMkYxZEdndmNtVmhiRzF6TDJWdVpHVmhkbTl5TFhOd1pXRnJaWEp6SWl3aVlYVmtJam9pWlc1a1pXRjJiM0l0YzNCbFlXdGxjbk10Wm5KdmJuUmxibVFpTENKemRXSWlPaUpqT1RBek9HWm1NeTB3TnpnM0xUUXdNVEl0WW1Ka1l5MDVOV0l3WW1ObU5EQTFOMklpTENKMGVYQWlPaUpKUkNJc0ltRjZjQ0k2SW1WdVpHVmhkbTl5TFhOd1pXRnJaWEp6TFdaeWIyNTBaVzVrSWl3aWMyVnpjMmx2Ymw5emRHRjBaU0k2SWpaa1pHVTRPRE5tTFRrNE5Ea3ROREZtTVMxaVpUTmpMVGRqTVdObE1ERTFOR1V3TUNJc0ltRmpjaUk2SWpFaUxDSmxiV0ZwYkY5MlpYSnBabWxsWkNJNlptRnNjMlVzSW01aGJXVWlPaUpOWVc1aFoyVnlJRlJsYzNRaUxDSndjbVZtWlhKeVpXUmZkWE5sY201aGJXVWlPaUp0WVc1aFoyVnlRSFJsYzNRdVkyOXRJaXdpWjJsMlpXNWZibUZ0WlNJNklrMWhibUZuWlhJaUxDSm1ZVzFwYkhsZmJtRnRaU0k2SWxSbGMzUWlMQ0psYldGcGJDSTZJbTFoYm1GblpYSkFkR1Z6ZEM1amIyMGlmUS5KWFgwWWZmM1IzdzNJQlhkNWh3bHZfMU95VWR4Q0F3dk5sRTFEYVJLWDUzajdpUXlpZ2dlcjFoUU9Fa1FMOFNiZlBzWGFUVmNJYTRsZ25JUW5lR0hQTjdFZjRaM05zNkNLOFFXRktybURrQ1RKOFdKcTFZOWo4S2JCM3p6LU1PMmJ4SnFXT2UxWDAwZHJTcnhoei0ya0szSUJ1M0g3MUFoNU52bER5SUg2cEI5cXlvS290NnJGcTQxNk1wM2ZTME9lR245SzZxVjh4YkxLOTBYbnotS1VoQjV3Mnc0ZmJnUUdQLWNrdlpnR3VsQVJQczNnbUswaUhFdXV0RXFGTm9fYTUyVm1aTXEtM0dXZTM4ZTJ1amU0ZXk5VmpaTHdTaWQ2eWtQQkNWSlBIM01iWmUwbWR1STNFMFhYYThMOUR2bFBhcHh6aFdIaUxzeXFnUGh5RnZxM2ciLCJyZWZyZXNoX3Rva2VuIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJZ09pQWlTbGRVSWl3aWEybGtJaUE2SUNJNU56RmlNekkyTWkweU5XVmtMVFE0WWpNdE9UWm1PUzAxWWpBME56azRNakV5T1RnaWZRLmV5SmxlSEFpT2pFMU9USXpNamt3TURjc0ltbGhkQ0k2TVRVNU1qTXlOekl3Tnl3aWFuUnBJam9pT1RNME1tUXlOVFF0Wm1NNU5TMDBZMlk1TFdFek1Ua3RNRFpsWkRabE1tWmlPR0prSWl3aWFYTnpJam9pYUhSMGNEb3ZMMnh2WTJGc2FHOXpkRG96TURBNE1DOWhkWFJvTDNKbFlXeHRjeTlsYm1SbFlYWnZjaTF6Y0dWaGEyVnljeUlzSW1GMVpDSTZJbWgwZEhBNkx5OXNiMk5oYkdodmMzUTZNekF3T0RBdllYVjBhQzl5WldGc2JYTXZaVzVrWldGMmIzSXRjM0JsWVd0bGNuTWlMQ0p6ZFdJaU9pSmpPVEF6T0dabU15MHdOemczTFRRd01USXRZbUprWXkwNU5XSXdZbU5tTkRBMU4ySWlMQ0owZVhBaU9pSlNaV1p5WlhOb0lpd2lZWHB3SWpvaVpXNWtaV0YyYjNJdGMzQmxZV3RsY25NdFpuSnZiblJsYm1RaUxDSnpaWE56YVc5dVgzTjBZWFJsSWpvaU5tUmtaVGc0TTJZdE9UZzBPUzAwTVdZeExXSmxNMk10TjJNeFkyVXdNVFUwWlRBd0lpd2ljMk52Y0dVaU9pSnZjR1Z1YVdRZ1pXMWhhV3dnY0hKdlptbHNaU0o5LnAxa0w3cTJDZExlVlhfXzZvdkROdXlja3gtbUFaWnFaU0ZHcllOVVFMYk0ifQ=="
// );
// auth.passwordLogin("Speakers2020").then((auth) => {
//   // console.log(`Login: authenticated=${auth.isAuthenticated()}`);
// });
// For future login page without KC template/iframe :)
// auth.login("manager@test.com", "password").then((auth) => {
//   console.log(`Login: authenticated=${auth.isAuthenticated()}`);
// });

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
        <TopRightSemi />
        <Switch>
          <Route
            path="/talent/:slug/confirmation"
            component={Confirmation}
            exact
          />
          <Route path="/talent/:slug/booking" component={TalentBooking} exact />
          <Route path="/talent/:slug" component={Talent} exact />
          <Route path="/type/:id" component={Type} exact />
          <Route path="/subtopic/:id" component={Subtopic} exact />
          <Route path="/topic" component={Topics} exact />
          <Route path="/explore" component={Explore} exact />
          <Route path="/how-it-works" component={HowItWorks} exact />
          <Route path="/about-us" component={AboutUs} exact />
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

export default App;
