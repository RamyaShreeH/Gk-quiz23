import React from 'react';
import { useState } from 'react';
import '../App.css';
import Timer from './Timer'
import Score from './Score.js'

const MainComponent = ({qBank,solLink}) => {
  const [radioState, setRadioState] = useState({
    status : ""
  });

  const [questionBank, setQuesionState] = useState(qBank);

  const [currentQuestion, setCurrentQuesionState] = useState(1);
  const [prevState, setPrevState] = useState(0);
  const [quizEnd, setQuizEndState] = useState("");
  const [selectedOption, setSelectedOptionState] = useState("");
  const [score, setScoreState] = useState(0);

  const handleSubmit = event => {
   event.preventDefault();
   checkAnswer();
   handleNextQuestion();
 }

  const handleChange = (event) => {
    setRadioState(setSelectedOptionState(event.target.value))
  }

  const handleNextQuestion = () => {
      if(currentQuestion+1 <= questionBank.length){
        setPrevState(currentQuestion)
        setCurrentQuesionState(currentQuestion + 1);
        setSelectedOptionState("")
        console.log("current q",currentQuestion)
        console.log("prevstate",prevState)
        //console.log("length",questionBank.length)
      }
      else{
        setQuizEndState("true")
      }
	};

  const checkAnswer = () => {

		if (selectedOption === questionBank[currentQuestion-1].answer) {
      setScoreState(score + 1)
		}
	};

  const handleFinish = () => {
    console.log("Handle finish")
    setCurrentQuesionState(questionBank.length)
  }

  const onExpire = () =>{
    console.log("On Expire")
  }

  return(
    <div className='quiz-page'>
        {!quizEnd ? (
            <form onSubmit={handleSubmit}>
              <text className='question'><span className='note'>Note: 1.)</span>
              Please click on finish to submit the quiz.
              <span className='note'>2.)</span>Do not refresh the page.</text>
              <Timer duration={ 3 * 60 * 1000} onExpire = {onExpire}/>
              <button className="btn btn-danger mt-2" onClick={handleFinish}>Finish</button>
              <br></br>
              <text className='question-no'>Question {questionBank[prevState].id} / {questionBank.length}</text>
              <br></br>
              <text className='question'>{questionBank[prevState].question}</text>
              <div className="question">
                {questionBank[prevState].options.map((option, index) => (
                  <div key={index} className="form-check">
                    <input
                      type="radio"
                      name="option"
                      value={option}
                      onClick={handleChange}
                      checked={selectedOption === option}
                    />
                    <label className="form-check-label">{option}</label>
                  </div>
                ))}
            </div>
            <button className="btn btn-success mt-2" type="submit">Submit</button>
            </form>
        ): 
        <div>
          <Score score = {score} link = {solLink}/>
        </div>
          }
    </div>
  )
}
export default MainComponent;