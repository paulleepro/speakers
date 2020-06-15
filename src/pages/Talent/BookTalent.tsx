import React, { FC } from "react";
import { Row, Col, Container } from "react-grid-system";
import { Box } from "react-basic-blocks";
import { DescriptionText, HeaderText, Button } from "styles/components";
import colors from "styles/colors";
import { Link } from "react-router-dom";
import { BookTalentWrapper } from "./styles";

interface IProps {
  name: string;
  slug: string;
}

const BookTalent: FC<IProps> = ({ name, slug }) => {
  return (
    <BookTalentWrapper>
      <Container fluid>
        <Row>
          <Col offset={{ md: 2 }} md={8} xs={12}>
            <Box margin="120px 0 120px 0" alignItems="center">
              <HeaderText>Book {name} For Your Event</HeaderText>
              <DescriptionText color={colors.midGrey} textAlign="center">
                We bring talent directly to you. Our high-profile speakers are
                available for your next corporate event.
              </DescriptionText>
              <Link to={`/talent/${slug}/booking`}>
                <Button margin="40px 0 0 0">Book Today</Button>
              </Link>
            </Box>
          </Col>
        </Row>
      </Container>
    </BookTalentWrapper>
  );
};

export default BookTalent;
