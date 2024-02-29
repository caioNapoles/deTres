import { Input, theme } from "antd";
import { useState } from "react";
const { useToken } = theme;
const CalculatorInput = ({ onChange, isX }) => {
  const [inputValue, setInputValue] = useState("");
  const { token } = useToken();
  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };
  if (isX) {
    return (
      <>
        <Input
          className="CalculatorInput"
          defaultValue="X"
          value="X"
          disabled
          style={{
            background: token.colorPrimaryBg,
            color: token.colorPrimaryText,
            borderColor: token.colorPrimaryBorder,
          }}
        />
      </>
    );
  }

  return (
    <>
      <Input
        className="CalculatorInput"
        type="number"
        onChange={handleChange}
        value={inputValue}
      />
    </>
  );
};

export default CalculatorInput;
