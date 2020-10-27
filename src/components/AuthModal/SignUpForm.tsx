import React, { FC } from "react";
import { Container, Row, Col } from "components/Grid";
import { Button } from "styles/components";
import { FormWrapper, Input, Label, Checkbox } from "./styles";
import { useAuth } from "context/AuthContext";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";

interface IProps {
  onClose: () => void;
}

const SignInForm: FC<IProps> = ({ onClose }) => {
  const { signup } = useAuth();
  const { handleSubmit, register } = useForm();
  const [doSignup, { isLoading: isSigningUp }] = useMutation(signup);

  const onSubmit: any = async (values: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => {
    if (isSigningUp) {
      return;
    }
    await doSignup(values, { onSuccess: onClose });
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Container fluid>
        <Row>
          <Col md={6}>
            <Label>First Name</Label>
            <Input
              name="firstName"
              placeholder="First Name"
              ref={register({
                required: "Required",
              })}
            />
          </Col>
          <Col md={6}>
            <Label>Last Name</Label>
            <Input
              name="lastName"
              placeholder="Last Name"
              ref={register({
                required: "Required",
              })}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              ref={register({
                required: "Required",
              })}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              ref={register({
                required: "Required",
              })}
            />
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
            <Button padding="14px 70px" margin="8px 0 0" type="submit">
              Sign Up
            </Button>
          </Col>
        </Row>
      </Container>
    </FormWrapper>
  );
};

export default SignInForm;
