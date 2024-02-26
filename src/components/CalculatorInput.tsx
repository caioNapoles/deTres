import { useState } from "react";

const CalculatorInput = ({ onChange, isX }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };
  if (isX) {
    return (
      <>
        <input defaultValue="X" value="X" disabled />
      </>
    );
  }

  return (
    <>
      <input type="number" onChange={handleChange} value={inputValue} />
    </>
  );
};

export default CalculatorInput;
