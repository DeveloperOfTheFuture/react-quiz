import React, {Component} from "react";

import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

import './Quiz.scss';

class Quiz extends Component {
  state = {
    results: {},  // {id: 'error' ('success')}
    isFinished: false,
    activeQuestion: 0,
    answerState: null,  // {id: 'error' ('success')}
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
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];

      if (this.state.answerState[key] === 'success') {
        return;
      }
    }

    const question = this.state.quiz[this.state.activeQuestion];
    const results = this.state.results;

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success';
      }
      this.setState({
        answerState: {[answerId]: 'success'},
        results
      });

      const timeout = setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true
          })
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }
        clearTimeout(timeout);
      }, 500);
    } else {
      results[question.id] = 'error';
      this.setState({
        answerState: {[answerId]: 'error'},
        results
      })
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {}
    })
  }

  render() {
    return (
      <section className="Quiz">
        <div className="Quiz__wrapper">
          <h1>Ответьте на вопросы</h1>

          {this.state.isFinished ?
            <FinishedQuiz results={this.state.results} quiz={this.state.quiz}
              onRetry={this.retryHandler}/> :
            <ActiveQuiz answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler} quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}/>}
        </div>
      </section>
    )
  }
}

export default Quiz;