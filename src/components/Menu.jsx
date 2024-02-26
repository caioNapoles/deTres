import HelpIcon from "@mui/icons-material/Help";
import { IconButton, Icon } from "@mui/material";
import React, { useState } from "react";
import Settings from "./SettingsMenu";
import SettingsMenu from "./SettingsMenu";

const Menu = () => {
  const [showMenu, setMenu] = useState(false);
  const [isHigh, setIsHigh] = useState(true);
  const [dynamicX, setDynamicX] = useState(true);

  const handleMenu = () => {
    setMenu(!showMenu);
  };
  return (
    <div className="Menu">
      <div>
        <h1>deTres</h1>
        <h4>a simple proportion calculator</h4>
      </div>

      <IconButton onClick={handleMenu}>
        <Icon>
          <HelpIcon sx={{ color: "#8993EA" }} />
        </Icon>
      </IconButton>

      <SettingsMenu
        visibility={showMenu}
        highPrecision={isHigh}
        togglePrecision={togglePrecision}
        dynamicX={dynamicX}
        toggleDynamicX={toggleDynamicX}
      />
    </div>
  );
};

export default Menu;
