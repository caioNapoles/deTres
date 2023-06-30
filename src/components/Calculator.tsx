import { useState } from "react";
let resultValue = 0;

const Calculator = () => {
  const [run, setRun] = useState(false);
  function resultCalculation() {
    let var1 = document.getElementById("variable1").value;
    let var2 = document.getElementById("variable2").value;
    let var3 = document.getElementById("variable3").value;
    let x = (var2 * var3) / var1;
    resultValue = x;
  }
  function handleRun() {
    setRun(!run);
    resultCalculation();
  }

  return (
    <>
      <div className="Calculator">
        <input type="number" id="variable1" />
        <h3>is for</h3>
        <input type="number" id="variable2" />
        <h3>just as</h3>
        <input type="number" id="variable3" />
        <h3>is for X</h3>
      </div>
      <div>
        <button onClick={handleRun}>RUN</button>
        <h3>Result: {resultValue}</h3>
      </div>
    </>
  );
};

export default Calculator;
