import React, {Component} from "react";

import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

import './Quiz.scss';

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        question: 'Вопрос без ответа',
        rightAnswerId: 3,
        id: 1,
        answers: [
          {text: "Ответ без вопроса", id: 1},
          {text: "Ответ без вопроса 2", id: 2},
          {text: "Ответ без вопроса 3", id: 3},
          {text: "Ответ без вопроса 4", id: 4},
        ]
      },
      {
        question: 'Вопрос без ответа 2',
        rightAnswerId: 4,
        id: 2,
        answers: [
          {text: "Ответ без вопроса", id: 1},
          {text: "Ответ без вопроса 2", id: 2},
          {text: "Ответ без вопроса 3", id: 3},
          {text: "Ответ без вопроса 4", id: 4},
        ]
      },
    ]
  };

  onAnswerClickHandler = answerId => {
    const question = this.state.quiz[this.state.activeQuestion];

    if (question.rightAnswerId === answerId) {
      this.setState({
        answerState: {[answerId]: 'success'}
      });

      const timeout = setTimeout(() => {
        if (this.isQuizFinished()) {
          console.log("Наотвечался");
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }
        clearTimeout(timeout);
      }, 1000);
    } else {
      this.setState({
        answerState: {[answerId]: 'error'}
      })
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  render() {
    return (
      <section className="Quiz">
        <div className="Quiz__wrapper">
          <h1>Ответьте на вопросы</h1>
          <ActiveQuiz answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler} quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
            state={this.state.answerState}/>
        </div>
      </section>
    )
  }
}

export default Quiz;