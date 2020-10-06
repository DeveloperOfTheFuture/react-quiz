import React from "react";

import AnswerItem from "./AnswerItem/AnswerItem";

import './AnswersList.scss';

const AnswersList = props => {
  return (
    <ul className="AnswersList">
      {props.answers.map((answer, index) => {
        return (
          <AnswerItem key={index} answer={answer} state={props.state ? props.state[answer.id] : null}
            onAnswerClick={props.onAnswerClick}/>
        )
      })}
    </ul>
  );
}

export default AnswersList;