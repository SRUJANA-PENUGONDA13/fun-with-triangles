import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
const Hypotenuse = () => {
  var [base, setBase] = useState("");
  var [height, setHeight] = useState("");
  var [output, setOutput] = useState("");

  const calculateHypotenuse = () => {
    let b = parseInt(base);
    let h = parseInt(height);
    if (b < 0 || h < 0 || Number.isNaN(b) || Number.isNaN(h)) {
      setOutput("Please provide valid inputs");
    } else {
      var hypotenuse = Math.sqrt(Math.pow(b, 2) + Math.pow(h, 2));
      setOutput("The length of hypotenuse is " + hypotenuse.toFixed(2));
    }
  };
  return (
    <React.Fragment>
      <Header />
      <main className="triangle-test">
        <h1>Calculate Hypotenuse of a triangle</h1>
        <label class="input-label" for="base">
          <p>Enter base value (a) =</p>
          <input
            type="number"
            class="input-text side-input"
            name="base"
            min="0"
            onChange={(event) => setBase(event.target.value)}
          ></input>
        </label>
        <label class="input-label" for="height">
          <p>Enter height value (b) = =</p>
          <input
            type="number"
            class="input-text side-input"
            name="height"
            min="0"
            onChange={(event) => setHeight(event.target.value)}
          ></input>
        </label>
        <button class="btn-check" onClick={() => calculateHypotenuse()}>
          Calculate hypotenuse
        </button>
        <h1>Hypotenuse formula</h1>
        <h3>√(base² + height²)</h3>
        <h2>{output}</h2>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Hypotenuse;
