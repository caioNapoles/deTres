import { Flex, theme } from "antd";
import Menu from "./Menu";
import Calculator from "./Calculator";
import Footer from "./Footer";

const { useToken } = theme;

function MainPage() {
  const { token } = useToken();

  return (
    <Flex className="MainPage" vertical align="center">
      <Menu />
      <Calculator />
      <Footer />
    </Flex>
  );
}

export default MainPage;
