import HelpIcon from "@mui/icons-material/Help";
import { IconButton, Icon } from "@mui/material";
import React from "react";

const Menu = () => {
  return (
    <div className="Menu">
      <div>
        <h1>deTres</h1>
        <h4>a simple proportion calculator</h4>
      </div>

      <IconButton>
        <Icon>
          <HelpIcon sx={{ color: "#8993EA" }} />
        </Icon>
      </IconButton>
    </div>
  );
};

export default Menu;
