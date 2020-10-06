import React from "react";

import AnswersList from "./AnswersList/AnswersList";

import './ActiveQuiz.scss';

const ActiveQuiz = props => {
  return (
    <div className="ActiveQuiz">
      <p className="Question">
        <span>
          <strong>2.</strong>&nbsp;
          What's App?
        </span>
        <small>1 / 2</small>
      </p>

      <AnswersList answers={props.answers} />
    </div>
  );
};

export default ActiveQuiz;