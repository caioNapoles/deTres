import { Divider, ConfigProvider } from "antd";
import "./App.css";
import MainPage from "./components/MainPage";
import { red } from "@mui/material/colors";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0065F2",
          colorSuccess: "#659F15",
          colorError: "FF4248",
        },
      }}
    >
      <MainPage />
    </ConfigProvider>
  );
}

export default App;
