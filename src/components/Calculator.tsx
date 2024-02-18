import { useState, useEffect } from "react";
import CalculatorInput from "./CalculatorInput";

let resultValue = 0;

const Calculator = () => {
  const [run, setRun] = useState(false);
  const [filledValues, setFilledValues] = useState(0);
  const [isRunDisabled, setIsRunDisabled] = useState(true);
  const [renderCheck, setRenderCheck] = useState(false);
  const [isVar1X, setisVar1X] = useState(false);
  const [isVar2X, setisVar2X] = useState(false);
  const [isVar3X, setisVar3X] = useState(false);
  const [isVar4X, setisVar4X] = useState(false);

  useEffect(() => {
    setIsRunDisabled(true);
    setisVar1X(false);
    setisVar2X(false);
    setisVar3X(false);
    setisVar4X(false);
    runEnabler();
  });

  const [var1, setVar1] = useState("");
  const handleVar1 = (value) => {
    setRenderCheck(true);
    setVar1(value);
    setRenderCheck(false);
  };
  const [var2, setVar2] = useState("");
  const handleVar2 = (value) => {
    setVar2(value);
  };
  const [var3, setVar3] = useState("");
  const handleVar3 = (value) => {
    setVar3(value);
  };
  const [var4, setVar4] = useState("");
  const handleVar4 = (value) => {
    setVar4(value);
  };

  function runEnabler() {
    if (var3 != "" && var2 != "" && var4 != "") {
      setIsRunDisabled(false);
      setisVar1X(true);
    } else if (var3 != "" && var1 != "" && var4 != "") {
      setIsRunDisabled(false);
      setisVar2X(true);
    } else if (var1 != "" && var2 != "" && var4 != "") {
      setIsRunDisabled(false);
      setisVar3X(true);
    } else if (var1 != "" && var2 != "" && var3 != "") {
      setIsRunDisabled(false);
      setisVar4X(true);
    } else {
    }
  }

  function resultCalculation() {
    if (isVar1X) {
      let x = (var2 * var3) / var4;
      resultValue = x;
    } else if (isVar2X) {
      let x = (var1 * var4) / var3;
      resultValue = x;
    } else if (isVar3X) {
      let x = (var1 * var4) / var2;
      resultValue = x;
    } else if (isVar4X) {
      let x = (var2 * var3) / var1;
      resultValue = x;
    }
  }

  function handleRun() {
    setRun(!run);
    resultCalculation();
  }

  return (
    <>
      <div className="Calculator">
        <CalculatorInput id="variable1" onChange={handleVar1} isX={isVar1X} />
        <h3> = </h3>
        <CalculatorInput id="variable2" onChange={handleVar2} isX={isVar2X} />
        <CalculatorInput id="variable3" onChange={handleVar3} isX={isVar3X} />
        <h3> = </h3>
        <CalculatorInput id="variable4" onChange={handleVar4} isX={isVar4X} />
      </div>
      <div>
        <button onClick={handleRun} disabled={isRunDisabled}>
          {" "}
          RUN
        </button>
        <h3>Result: {resultValue}</h3>
      </div>
    </>
  );
};

export default Calculator;
