import HelpIcon from "@mui/icons-material/Help";
import { IconButton, Icon } from "@mui/material";
import React from "react";
import { Typography, theme, Flex } from "antd";
const { useToken } = theme;
const Menu = () => {
  const { token } = useToken();
  const { Title } = Typography;
  return (
    <Flex className="Menu" align="start" vertical>
      <Title
        id="level1"
        level={1}
        style={{
          height: "auto",
          margin: 0,
          padding: 0,
          fontSize: "3rem",
          color: token.colorPrimary,
        }}
        color="primary"
        underline
      >
        deTres
      </Title>
      <Title
        id="level4"
        level={5}
        type="secondary"
        style={{
          height: "auto",
          margin: 0,
          padding: 0,
          marginBottom: "1rem",
        }}
      >
        a simple proportion calculator
      </Title>

      {/* <IconButton>
        <Icon>
          <HelpIcon sx={{ color: "#8993EA" }} />
        </Icon>
      </IconButton> */}
    </Flex>
  );
};

export default Menu;
