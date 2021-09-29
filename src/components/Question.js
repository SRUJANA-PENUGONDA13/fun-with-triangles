import React from "react";

const Question = (props) => {
  const updateOuptut = (event, index, question) => {
    question.output = event.target.value;
    props.questionBank[index] = question;
  };
  return (
    <React.Fragment>
      {props.questionBank.map((question, index) => (
        <div
          className="question-container"
          onChange={() => props.setUserOutput(props.questionBank)}
        >
          <p>{question.content}</p>
          <label>
            <input
              type="radio"
              name={question.name}
              value={question.options[0]}
              onChange={(event) => updateOuptut(event, index, question)}
            ></input>
            {question.options[0]}
          </label>
          <label>
            <input
              type="radio"
              name={question.name}
              value={question.options[1]}
              onChange={(event) => updateOuptut(event, index, question)}
            ></input>
            {question.options[1]}
          </label>
          <label>
            <input
              type="radio"
              name={question.name}
              value={question.options[2]}
              onChange={(event) => updateOuptut(event, index, question)}
            ></input>
            {question.options[2]}
          </label>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Question;
