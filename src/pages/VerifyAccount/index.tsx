import React, { FC, useEffect, useState } from "react";
import { Row, Col } from "components/Grid";
import { Button, HeaderText } from "styles/components";
import { FormWrapper, Input, Label } from "./styles";
import { useAuth } from "context/AuthContext";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";

const VerifyAccount: FC = () => {
  const history = useHistory();
  const { email: paramEmail } = useParams<{ email: string }>();
  const { confirmSignup } = useAuth();
  const { handleSubmit, register } = useForm();
  const [doConfirmSignup, { isLoading: isConfirming }] = useMutation(
    confirmSignup
  );
  const [email, setEmail] = useState(decodeURIComponent(paramEmail));

  useEffect(() => {
    setEmail(decodeURIComponent(paramEmail));
  }, [paramEmail]);

  const onSubmit: any = async (values: { email: string; code: string }) => {
    if (isConfirming) {
      return;
    }
    await doConfirmSignup(values, { onSuccess: () => history.push("/") });
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <HeaderText>Verify your account</HeaderText>
      <p>Please check your email to find your verification code</p>
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
            value={email}
            onChange={(evt: any) => setEmail(evt.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Label>Code</Label>
          <Input
            name="code"
            placeholder="Code"
            ref={register({
              required: "Required",
            })}
          />
        </Col>
      </Row>
      <Row>
        <Col
          md={6}
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button padding="14px 70px" margin="8px 0 0" onClick={onSubmit}>
            Submit
          </Button>
        </Col>
      </Row>
    </FormWrapper>
  );
};

export default VerifyAccount;
