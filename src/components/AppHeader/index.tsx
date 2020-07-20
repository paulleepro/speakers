import React, { FC } from "react";
import SmallHeader from "./SmallHeader";
import BigHeader from "./BigHeader";
import { Visible } from "react-grid-system";
import { fetchSingle } from "fetch-hooks-react";
import { config } from "config";
import { IType, IListResult } from "types";

const AppHeader: FC = () => {
  const { data } = fetchSingle<IListResult<IType>>(
    `${config.speakersTalentUrl}/v1/talents/metadata/types?order=name:asc`
  );
  return (
    <header>
      <Visible xs sm>
        <SmallHeader types={data?.data} />
      </Visible>
      <Visible md lg>
        <BigHeader types={data?.data} />
      </Visible>
    </header>
  );
};

export default AppHeader;
