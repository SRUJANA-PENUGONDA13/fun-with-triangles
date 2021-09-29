import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Hypotenuse from "./Hypotenuse";
import Triangle from "./Triangle";
import Quiz from "./Quiz";
import Area from "./Area";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Quiz} />
      <Route path="/area" exact component={Area} />
      <Route path="/hypotenuse" exact component={Hypotenuse} />
      <Route path="/triangle" exact component={Triangle} />
    </BrowserRouter>
  );
};

export default App;
