import { Typography, Box } from "@mui/material";
import Menu from "./Menu";
import Calculator from "./Calculator";
import Footer from "./Footer";
import ParentComponent from "./MyComponent";

function MainPage() {
  return (
    <div>
      <Menu />
      <Calculator/>
      <Footer />
    </div>
  );
}

export default MainPage;
