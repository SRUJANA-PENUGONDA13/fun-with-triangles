import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Question from "./Question";

const Quiz = () => {
  let questionBank = require("../resources/questionBank.json");
  let [output, setOutput] = useState(" ");
  let [actualAnswers, setActualAnswers] = useState([
    "90°",
    "right angled",
    "one right angle",
    "12, 16, 20",
    "Equilateral triangle",
    "one right angle",
    "85°",
    "40°",
    "a + b + c",
    "no",
    "45°",
  ]);
  let [userResponse, setUserResponse] = useState([]);

  const calculateScore = (event) => {
    event.preventDefault();
    var count = 0;
    setOutput("");
    userResponse.map((question, index) => {
      if (question.output.localeCompare(actualAnswers[index]) == 0) {
        count = count + 1;
      }
    });
    setOutput("Your score is: " + count);
  };

  return (
    <React.Fragment>
      <Header />
      <main className="triangle-test">
        <h1>Quiz on triangles</h1>
        <h3>For each correct answer you will get 1 point</h3>
        <form className="quiz-form" onSubmit={(event) => calculateScore(event)}>
          <Question
            questionBank={questionBank}
            setUserOutput={(userResponse) => setUserResponse(userResponse)}
          />
          <button type="submit" className="btn-check">
            Submit Answers
          </button>
        </form>
        <h1>{output}</h1>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Quiz;
