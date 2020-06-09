import React, { FC } from "react";
import SmallHeader from "./SmallHeader";
import BigHeader from "./BigHeader";
import { Visible } from "react-grid-system";

const AppHeader: FC = () => {
  return (
    <>
      <Visible xs sm>
        <SmallHeader />
      </Visible>
      <Visible md lg>
        <BigHeader />
      </Visible>
    </>
  );
};

export default AppHeader;
