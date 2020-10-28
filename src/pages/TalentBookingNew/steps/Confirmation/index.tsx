import React, { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { Box } from "react-basic-blocks";
import moment from "moment";
import { Visible } from "components/Grid";
import { Button } from "styles/components";
import { BookingInquiryContext } from "../../BookingInquiryContext";
import {
  Wrapper,
  SummaryWrapper,
  EventName,
  SummaryInfoBox,
  Preference,
  Header,
  Content,
  Footer,
  SummaryCol,
  Border,
} from "./styles";
import Bullet from "./Bullet";
import colors from "styles/colors";

interface ISummaryInfo {
  name: string;
  value: any;
  bold?: boolean;
}

const SummaryInfo: FC<ISummaryInfo> = ({ name, value, bold }) => {
  return (
    <SummaryInfoBox flexDirection="row" bold={bold}>
      <span>{name}:</span>
      <div>{value}</div>
    </SummaryInfoBox>
  );
};

const BudgetInfo = () => {
  const { bookingInquiry } = useContext(BookingInquiryContext);
  const { event_budget_range, event_budget_custom_range } = bookingInquiry;

  return (
    <Box flexDirection="row">
      <SummaryInfo name="Budget Range" value={event_budget_range} />
      <Box margin="2px 4px 0">|</Box>
      <SummaryInfo name="Specific" value={event_budget_custom_range} />
    </Box>
  );
};

const SummaryBlock = () => {
  const { bookingInquiry } = useContext(BookingInquiryContext);

  const {
    event_name,
    event_type,
    event_focus,
    event_audience_size_range,
    event_date_start,
    event_time,
    talent_ids,
  } = bookingInquiry;

  return (
    <SummaryWrapper>
      <SummaryCol border>
        <EventName>{event_name}</EventName>
        <SummaryInfo name="Format" value={event_type} bold />
        <SummaryInfo name="Focus" value={event_focus} />
        <SummaryInfo name="Size" value={event_audience_size_range} />
        <SummaryInfo
          name="When"
          value={
            <>
              {moment(event_date_start).format("MM/DD/YYYY")}{" "}
              <span style={{ color: colors.midGrey }}>|</span> {event_time}
            </>
          }
        />
      </SummaryCol>
      <Visible xs sm>
        <Border />
      </Visible>
      <SummaryCol>
        <Preference>Speaker preferences: </Preference>
        <SummaryInfo
          name="Favorites"
          value={
            <>
              {(talent_ids || []).map((talentId) => (
                <Link key={talentId} to={`/${talentId}`}>
                  {talentId}
                </Link>
              ))}
            </>
          }
        />
        <SummaryInfo
          name="Added"
          value={
            <>
              {(talent_ids || []).map((talentId) => (
                <Link key={talentId} to={`/${talentId}`}>
                  {talentId}
                </Link>
              ))}
            </>
          }
        />
        <BudgetInfo />
      </SummaryCol>
    </SummaryWrapper>
  );
};

const Confirmation = () => {
  const history = useHistory();
  const { bookingInquiry } = useContext(BookingInquiryContext);

  const { host_full_name } = bookingInquiry;

  return (
    <Wrapper>
      <Header>Thanks {host_full_name}! What’s next?</Header>
      <Content>
        <SummaryBlock />
        <Bullet
          order={1}
          title="Hear back from our agents"
          description="This will take approximately 1-3 days"
        />
        <Bullet
          order={2}
          title="Check out your account"
          description={
            <>
              Visit your <Link to="/account">account</Link> to check on your
              proposal status, or make edits.
            </>
          }
        />
        <Bullet
          order={3}
          title="Add more speakers"
          description={
            <>
              Feel free to <Link to="/explore">browse</Link> our list and add
              more speakers to your booking request.
            </>
          }
          isLast
        />
      </Content>
      <Footer>
        <Button
          margin="24px 0 24px auto"
          padding="14px 27px 14px 28px"
          onClick={() => history.push("/account")}
        >
          View Your Account
        </Button>
      </Footer>
    </Wrapper>
  );
};

export default Confirmation;
