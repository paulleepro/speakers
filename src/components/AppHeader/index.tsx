import React, { FC, lazy } from "react";
import { useHistory } from "react-router";
import { Visible } from "components/Grid";
import { fetchSingle } from "fetch-hooks-react";
import { config } from "config";
import { IType, IListResult } from "types";
import LazyWrapper from "components/LazyWrapper";

const Subnav = lazy(() => import("./Subnav"));
const SmallHeader = lazy(() => import("./SmallHeader"));
const BigHeader = lazy(() => import("./BigHeader"));

const AppHeader: FC = () => {
  const history = useHistory();
  const isBookingPage = history.location.pathname.includes("/booking-new");

  const { data } = fetchSingle<IListResult<IType>>(
    `${config.speakersTalentUrl}/v1/talents/metadata/types?order=name:asc`
  );
  return (
    <LazyWrapper>
      <Visible xs sm>
        <SmallHeader types={data?.data} />
      </Visible>
      <Visible md lg>
        <BigHeader types={data?.data} />
      </Visible>
      {!isBookingPage && <Subnav types={data?.data} />}
    </LazyWrapper>
  );
};

export default AppHeader;
