import React, { FC } from "react";
import { Row, Col } from "components/Grid";
import { Button } from "styles/components";
import { FormWrapper, Input, Label } from "./styles";
import { useAuth } from "context/AuthContext";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";

interface IProps {
  onClose: () => void;
}

const ForgotPasswordForm: FC<IProps> = ({ onClose }) => {
  const { forgotPassword } = useAuth();
  const { handleSubmit, register } = useForm();
  const [doSubmitForgotPassword, { isLoading: isSubmitting }] = useMutation(
    forgotPassword
  );

  const onSubmit: any = async (values: { email: string }) => {
    if (isSubmitting) {
      return;
    }
    await doSubmitForgotPassword(values, { onSuccess: onClose });
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
        <Col style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button padding="14px 70px" margin="8px 0 0">
            Submit
          </Button>
        </Col>
      </Row>
    </FormWrapper>
  );
};

export default ForgotPasswordForm;
