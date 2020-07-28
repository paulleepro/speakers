import React, { FC } from "react";
import SmallHeader from "./SmallHeader";
import BigHeader from "./BigHeader";
import { Visible } from "components/Grid";
import { fetchSingle } from "fetch-hooks-react";
import { config } from "config";
import { IType, IListResult } from "types";
import Subnav from "./Subnav";

const AppHeader: FC = () => {
  const { data } = fetchSingle<IListResult<IType>>(
    `${config.speakersTalentUrl}/v1/talents/metadata/types?order=name:asc`
  );
  return (
    <>
      <Visible xs sm>
        <SmallHeader types={data?.data} />
      </Visible>
      <Visible md lg>
        <BigHeader types={data?.data} />
      </Visible>
      <Subnav types={data?.data} />
    </>
  );
};

export default AppHeader;
