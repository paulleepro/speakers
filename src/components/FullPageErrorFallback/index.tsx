import React, { FC } from "react";
import { Wrapper, Content } from "./styles";

const FullPageErrorFallback: FC<any> = ({ error }) => {
  return (
    <Wrapper>
      <Content>
        <p>An unexpected error occurred, please refresh the app.</p>
        <pre>{error?.message}</pre>
      </Content>
    </Wrapper>
  );
};

export default FullPageErrorFallback;
