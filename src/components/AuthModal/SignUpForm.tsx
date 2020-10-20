import React, { FC } from "react";
import { Container, Row, Col } from "components/Grid";
import { Button } from "styles/components";
import { FormWrapper, Input, Label, Checkbox } from "./styles";

const SignInForm: FC<any> = (props) => {
  return (
    <FormWrapper>
      <Container fluid>
        <Row>
          <Col md={6}>
            <Label>First Name</Label>
            <Input name="firstName" placeholder="First Name" />
          </Col>
          <Col md={6}>
            <Label>Last Name</Label>
            <Input name="lastName" placeholder="Last Name" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Label>Email</Label>
            <Input type="email" name="email" placeholder="Email" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Label>Password</Label>
            <Input type="password" name="password" placeholder="Password" />
          </Col>
        </Row>
        <Row>
          <Col md={6} style={{ display: "flex" }}>
            <Checkbox>
              <input type="checkbox" id="agreeCheckbox" name="agreeTos" />
              <span>
                I agree to{" "}
                <a
                  href="http://www.wmeagency.com/tos/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  XYZ terms
                </a>
              </span>
            </Checkbox>
          </Col>
          <Col
            md={6}
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button padding="14px 70px" margin="8px 0 0">
              Sign Up
            </Button>
          </Col>
        </Row>
      </Container>
    </FormWrapper>
  );
};

export default SignInForm;
