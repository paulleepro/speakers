import React, { FC, useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import { Input, SearchWrapper } from "./styles";

const Search: FC = () => {
  const [value, setValue] = useState<string>("");
  return (
    <SearchWrapper>
      <Container fluid>
        <Row>
          <Col offset={{ lg: 1 }} lg={10}>
            <Input
              placeholder="Try “Kendrick Lamar” or “Diversity”"
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
          </Col>
        </Row>
      </Container>
    </SearchWrapper>
  );
};

export default Search;
