import React, { FC, useContext } from "react";
import { Container, Row, Col } from "react-grid-system";
import { useHistory } from "react-router";
import { Box } from "react-basic-blocks";
import { Divider, Button, StyledError } from "styles/components";
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
// import { passwordLogin } from "auth-helpers";
import { Auth } from "Auth";

const validationSchema = yup.object().shape({
  password: yup.string().required(),
});

const onSubmit = (
  data: any,
  // keycloak: Keycloak.KeycloakInstance,
  auth: Auth,
  push: (url: string) => void,
  setError: (name: string, type: string, message: string) => void
) => {
  auth.logout();
  auth
    .passwordLogin(data.password)
    // passwordLogin(data.password, keycloak)
    .then(() => {
  // eslint-disable-next-line
      console.log(`>>> isAuthenticated: ${auth.isAuthenticated()}`);
      push("/");
    })
    .catch(() => {
      setError(
        "password",
        "invalidPassword",
        "Password is invalid. Try Again."
      );
    });
};

const PasswordProtection: FC = () => {
  // const { keycloak } = useContext(AuthContext);
  const { auth } = useContext(AuthContext);
  const { push } = useHistory();
  const { register, handleSubmit, errors, setError } = useForm({
    validationSchema,
  });

  return (
    <Wrapper>
      <TopSemi />
      <CirclesWrapper>
        <svg viewBox="-100 -100 200 200">
          <circle
            cx="0"
            cy="0"
            r="15"
            strokeWidth="0.3"
            strokeDasharray={1}
            stroke={colors.purpleLiner}
            fill="transparent"
          />
          <circle
            cx="0"
            cy="0"
            r="40"
            strokeWidth="0.3"
            strokeDasharray={1}
            stroke={colors.purpleLiner}
            fill="transparent"
          />
          <circle
            cx="0"
            cy="0"
            r="70"
            strokeWidth="0.3"
            strokeDasharray={1}
            stroke={colors.purpleLiner}
            fill="transparent"
          />
          <circle
            cx="0"
            cy="0"
            r="100"
            strokeWidth="0.3"
            strokeDasharray={1}
            stroke={colors.purpleLiner}
            fill="transparent"
          />
        </svg>
      </CirclesWrapper>
      <Container fluid>
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
                // onSubmit(data, keycloak, push, setError)
                onSubmit(data, auth, push, setError)
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
      </Container>
    </Wrapper>
  );
};

export default PasswordProtection;
