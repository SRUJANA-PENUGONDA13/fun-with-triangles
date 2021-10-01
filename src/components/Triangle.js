import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Triangle = () => {
  var [angle1, setAngle1] = useState("");
  var [angle2, setAngle2] = useState("");
  var [angle3, setAngle3] = useState("");
  var [output, setOutput] = useState("");

  const isTriangle = () => {
    var tangle1 = parseInt(angle1);
    var tangle2 = parseInt(angle2);
    var tangle3 = parseInt(angle3);
    if (
      Number.isNaN(tangle1) ||
      Number.isNaN(tangle2) ||
      Number.isNaN(tangle3) ||
      tangle1 < 0 ||
      tangle2 < 0 ||
      tangle3 < 0
    ) {
      setOutput("Please provide valid inputs");
    } else {
      var sum = tangle1 + tangle2 + tangle3;
      if (sum === 180) {
        setOutput("Yay, the angles form a triangle!");
      } else {
        setOutput("Oh Oh! The angles doesn't form a triangle");
      }
    }
  };

  return (
    <React.Fragment>
      <Header />
      <main className="triangle-test">
        <h1>Angles of triangles</h1>
        <label className="input-label" for="angle1">
          <p>Angle1</p>
        </label>
        <input
          type="number"
          min="0"
          className="input-text angle-input"
          name="angle1"
          onChange={(event) => setAngle1(event.target.value)}
        ></input>
        <label className="input-label" for="angle2">
          <p>Angle2</p>
        </label>
        <input
          min="0"
          type="number"
          className="input-text angle-input"
          name="angle1"
          onChange={(event) => setAngle2(event.target.value)}
        ></input>
        <label className="input-label" for="angle3">
          <p>Angle3</p>
        </label>
        <input
          type="number"
          className="input-text angle-input"
          min="0"
          name="angle3"
          onChange={(event) => setAngle3(event.target.value)}
        ></input>
        <button className="btn-check" onClick={() => isTriangle()}>
          Is Triangle?
        </button>
        <h2>{output}</h2>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Triangle;
