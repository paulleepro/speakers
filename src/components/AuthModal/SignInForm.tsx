import React, { FC } from "react";
import { Row, Col } from "components/Grid";
import { Button } from "styles/components";
import { FormWrapper, Input, Label, Checkbox } from "./styles";
import { useAuth } from "context/AuthContext";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";

interface IProps {
  onClose: () => void;
}

const SignInForm: FC<IProps> = ({ onClose }) => {
  const { login } = useAuth();
  const { handleSubmit, register } = useForm();
  const [doLogin, { isLoading: isLoggingIn }] = useMutation(login);

  const onSubmit: any = async (values: { email: string; password: string }) => {
    if (isLoggingIn) {
      return;
    }
    await doLogin(values, { onSuccess: onClose });
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
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
            <span>Remember me</span>
          </Checkbox>
        </Col>
        <Col
          md={6}
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button padding="14px 70px" margin="8px 0 0" onClick={onSubmit}>
            Sign In
          </Button>
        </Col>
      </Row>
    </FormWrapper>
  );
};

export default SignInForm;
