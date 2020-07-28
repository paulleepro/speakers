import React, { FC, useContext } from "react";
import { Row, Col } from "components/Grid";
import { Box } from "react-basic-blocks";
import {
  Divider,
  Button,
  StyledError,
  StyledContainer,
} from "styles/components";
import {
  Input,
  Wrapper,
  TopSemi,
  CirclesWrapper,
  FormBox,
  InstructionText,
} from "./styles";
import { InfoText } from "components/Footer/styles";
import colors from "styles/colors";
import { useForm, ErrorMessage } from "react-hook-form";
import * as yup from "yup";
import { AuthContext } from "AuthContext";
import Cookies from "universal-cookie";
import HeaderTags from "components/HeaderTags";

const validationSchema = yup.object().shape({
  password: yup.string().required(),
});

export const COOKIE_NAME = "END_OK";

const onSubmit = (
  data: any,
  setAuthenticated: (val: boolean) => void,
  setError: (name: string, type: string, message: string) => void
) => {
  if (data.password === "Speakers2020") {
    const cookies = new Cookies();
    cookies.set(COOKIE_NAME, "ok", {
      sameSite: true,
      path: "/",
      domain: window.location.hostname,
      maxAge: 2 * 24 * 60 * 60,
    });
    setAuthenticated(true);
  } else {
    setError("password", "invalidPassword", "Password is invalid. Try Again.");
  }
};

const PasswordProtection: FC = () => {
  const { setAuthenticated } = useContext(AuthContext);
  const { register, handleSubmit, errors, setError } = useForm({
    validationSchema,
  });

  return (
    <Wrapper>
      <HeaderTags
        title="Password"
        description="Please enter the site password."
      />
      <TopSemi />
      <CirclesWrapper>
        <svg viewBox="0 0 100 100">
          <circle
            cx="100"
            cy="0"
            r="15"
            strokeWidth="0.3"
            strokeDasharray={1}
            stroke={colors.purpleLiner}
            fill="transparent"
          />
          <circle
            cx="100"
            cy="0"
            r="40"
            strokeWidth="0.3"
            strokeDasharray={1}
            stroke={colors.purpleLiner}
            fill="transparent"
          />
          <circle
            cx="100"
            cy="0"
            r="70"
            strokeWidth="0.3"
            strokeDasharray={1}
            stroke={colors.purpleLiner}
            fill="transparent"
          />
          <circle
            cx="100"
            cy="0"
            r="100"
            strokeWidth="0.3"
            strokeDasharray={1}
            stroke={colors.purpleLiner}
            fill="transparent"
          />
        </svg>
      </CirclesWrapper>
      <StyledContainer fluid>
        <Row>
          <Col
            offset={{ lg: 3, md: 2, sm: 1, xs: 0 }}
            xs={12}
            sm={10}
            md={8}
            lg={6}
          >
            <form
              onSubmit={handleSubmit((data) =>
                onSubmit(data, setAuthenticated, setError)
              )}
            >
              <FormBox justifyContent="center" alignItems="center">
                <div>
                  <img src="/logo.png" height="40" alt="logo" />
                </div>
                <InstructionText>
                  Please enter password to access.
                </InstructionText>
                <Divider width="220px" />
                <Input type="password" name="password" ref={register} />
                <ErrorMessage
                  as={StyledError}
                  errors={errors}
                  name="password"
                />
                <Button type="submit" margin="20px 0 0 0">
                  Take Me To Site
                </Button>
              </FormBox>
            </form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Box alignItems="center" margin="85px 0">
              <InfoText>
                <a href="http://www.wmeagency.com/tos/" target="_terms">
                  Terms & Conditions
                </a>
                {" | "}
                <a
                  href="http://www.wmeagency.com/privacypolicy"
                  target="_terms"
                >
                  Privacy Policy
                </a>
                {" | "}
                <a
                  href="http://www.wmeagency.com/cookiepolicy/"
                  target="_terms"
                >
                  Cookie Policy
                </a>
              </InfoText>
            </Box>
          </Col>
        </Row>
      </StyledContainer>
    </Wrapper>
  );
};

export default PasswordProtection;
