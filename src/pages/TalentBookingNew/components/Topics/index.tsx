import React, { FC } from "react";
import { Box } from "react-basic-blocks";
import { Row, Col } from "components/Grid";
import AddIcon from "@material-ui/icons/Add";
import colors from "styles/colors";
import InputText from "../../common/InputText";
import { DropIcon, AddAnother } from "./styles";

interface IProps {
  value: string;
  onChange: (e: any) => void;
}

const Topics: FC<IProps> = ({ value, onChange }) => {
  return (
    <>
      <Row>
        <Col>
          <Box width="100%" flexDirection="row" alignItems="center">
            <InputText
              placeholder="Choose a Topic"
              name="themes"
              value={value}
              onChange={onChange}
            />
            <Box margin="0 -40px">
              <DropIcon />
            </Box>
          </Box>
        </Col>
      </Row>
      <Row>
        <Col>
          <Box width="100%" flexDirection="row" alignItems="center">
            <AddAnother>Add another</AddAnother>
            <Box margin="0 -54px">
              <AddIcon style={{ color: colors.primaryPurple, fontSize: 40 }} />
            </Box>
          </Box>
        </Col>
      </Row>
    </>
  );
};

export default Topics;
