import { Typography, Box } from "@mui/material";
import Menu from "./Menu";
import Calculator from "./Calculator";
import Footer from "./Footer";
import ParentComponent from "./MyComponent";
import SettingsMenu from "./SettingsMenu";
import { useState } from "react";

function MainPage() {
  const [highPrecision, setHighPrecision] = useState(true);
  return (
    <div>
      <Menu />
      <Calculator />
      <Footer />
    </div>
  );
}

export default MainPage;
