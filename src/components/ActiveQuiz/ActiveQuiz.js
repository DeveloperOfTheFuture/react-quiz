import React from "react";

import AnswersList from "./AnswersList/AnswersList";

import './ActiveQuiz.scss';

const ActiveQuiz = props => {
  return (
    <div className="ActiveQuiz">
      <p className="Question">
        <span>
          <strong>{props.answerNumber}.</strong>&nbsp;
          {props.question}
        </span>
        <small>{props.answerNumber} / {props.quizLength}</small>
      </p>

      <AnswersList answers={props.answers} state={props.state} onAnswerClick={props.onAnswerClick}/>
    </div>
  );
};

export default ActiveQuiz;