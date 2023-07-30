import React, { useEffect, useState } from 'react';
import { UseAxios } from '../Components/UseAxios';
import { Spinner } from 'react-bootstrap';
import { decode } from 'html-entities';
import { Link, Navigate } from 'react-router-dom';


const QuestionPage = ({ category, level , questionIndex,setQuestionIndex,score,setScore,resetStates,history }) => {
  let URL = `/api.php?amount=3&category=${category}&difficulty=${level.toLowerCase()}&type=multiple`;
  const { response, error, loading } = UseAxios({ url: URL });
  console.log(response.results,score);
  console.log("questionIndex",questionIndex)

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };


  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (response?.results) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(getRandomInt(4), 0, question.correct_answer);
      setOptions(answers);
      console.log(score);
    }
  }, [response, questionIndex ,score, questionIndex, resetStates]);

  const handleClickAnswer = async(e) => {
    const handle=()=>{
      if (e.target.textContent === response.results[questionIndex].correct_answer) {
        setScore((prevScore) => prevScore + 1);
      }
      console.log(score)
  
      if (questionIndex + 1 < 3) {
        setQuestionIndex(questionIndex + 1);
      }
    }
  await handle()
  questionIndex++
  console.log("questionIndex",questionIndex)

  

  
  };

  return (
    <>
      {loading ? (
        <>
          <Spinner animation='border' variant='primary' />
          <h1>Loading ...</h1>
        </>
      ) :   (questionIndex>=2) ?

        <Navigate to="/score"/>
         : (
        <>
          <div className='Choice'>
            <div className='questions'>
              <h1>Question {questionIndex + 1}</h1>
              <br />
              <h3> Category: {response.results[questionIndex].category}</h3>
              <br />
              <h3> {decode(response.results[questionIndex].question)}</h3>
              <div className='responseBox'>
                {React.Children.toArray(
                  options.map((el) => (
                    <button className='RESPONSE' onClick={handleClickAnswer}>
                      {decode(el)}
                    </button>
                  ))
                )}
              </div>
            </div>
          </div>
        </>
      )}
      <Link to="/score">
      <button>Score</button>
      </Link>
    </>
  );
};


export default QuestionPage;