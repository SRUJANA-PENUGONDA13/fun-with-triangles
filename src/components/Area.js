import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Area = () => {
  var [side1, setSide1] = useState("");
  var [side2, setSide2] = useState("");
  var [side3, setSide3] = useState("");
  var [output, setOutput] = useState("");

  const calculateArea = () => {
    let a = parseInt(side1);
    let b = parseInt(side2);
    let c = parseInt(side3);

    if (
      a < 0 ||
      b < 0 ||
      c < 0 ||
      Number.isNaN(a) ||
      Number.isNaN(b) ||
      Number.isNaN(c)
    ) {
      setOutput("Please provide valid side lengths");
    } else {
      let s = (a + b + c) / 2;
      let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
      setOutput("Area of a triangle is: " + area.toFixed(2) + " units");
    }
  };
  return (
    <React.Fragment>
      <Header />
      <main className="triangle-test">
        <h1>Calculate Area of a triangle</h1>
        <label className="input-label" for="side1">
          <p>Enter first side of a triangle</p>
        </label>
        <input
          type="number"
          className="input-text angle-input"
          name="side1"
          onChange={(event) => setSide1(event.target.value)}
        ></input>
        <label className="input-label" for="side2">
          <p>Enter second side of a triangle</p>
        </label>
        <input
          type="number"
          className="input-text angle-input"
          name="side2"
          onChange={(event) => setSide2(event.target.value)}
        ></input>
        <label className="input-label" for="side3">
          <p>Enter third side of a triangle</p>
        </label>
        <input
          type="number"
          className="input-text angle-input"
          name="side3"
          onChange={(event) => setSide3(event.target.value)}
        ></input>
        <button className="btn-check" onClick={() => calculateArea()}>
          Calculate
        </button>
        <h2>{output}</h2>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default Area;
