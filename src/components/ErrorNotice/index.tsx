import React, { FC } from "react";
import { Box, Text, BoxProps } from "react-basic-blocks";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

type Props = BoxProps & {
  icon?: JSX.Element;
  color?: string;
  message?: string;
};

const ErrorNotice: FC<Props> = ({
  icon,
  message = "Something went wrong",
  color = "white",
  ...props
}) => (
  <Box padding="40px" alignItems="center" justifyContent="center" {...props}>
    {icon ? icon : <ErrorOutlineIcon fontSize="large" style={{ color }} />}
    <Text fontSize="medium" margin="20px 0" color={color}>
      {message}
    </Text>
  </Box>
);

export default ErrorNotice;
