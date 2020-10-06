import React from "react";

import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

import './Quiz.scss';

const Quiz = () => {
  const state = {
    quiz: [
      {
        answers: [
          {text: "Вопрос без ответа"},
          {text: "Вопрос без ответа 2"},
          {text: "Вопрос без ответа 3"},
          {text: "Вопрос без ответа 4"},
        ]
      }
    ]
  };

  return (
    <section className="Quiz">
      <div className="Quiz__wrapper">
        <h1>Необходимо ответить на вопросы</h1>
        <ActiveQuiz answers={state.quiz[0].answers} />
      </div>
    </section>
  );
};

export default Quiz;