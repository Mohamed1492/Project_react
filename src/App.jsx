
import { BrowserRouter as Router ,
Route,
Routes,
// useHistory
} from 'react-router-dom'
import CategoryChoice from './pages/CategoryChoice'
import QuestionPage from './pages/QuestionPage'
import LevelChoice from './pages/LevelChoice'
import './styles.css';
{
  /* The following line can be included in your src/index.js or App.js file */
}
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Score from './pages/Score';

function App() {
  const [category, setCategory] = useState('');
  const [level, setLevel] = useState('');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  // const history = useHistory();

  const resetStates = () => {
    setCategory('');
    setLevel('');
    setQuestionIndex(0);
    setScore(0);
  };

  return (
    <div className='container'>
      <Router>
        <div className='Logo'>
          <p>
            <b>Quiz-Game</b>
          </p>
        </div>
        <div>
          <Routes>
            <Route
              path='/'
              element={
                <div>
                  <CategoryChoice
                    handleCategory={(data) => setCategory(data)}
                    handleLevel={(data) => setLevel(data)}
                  />
                </div>
              }
            />
            <Route
              path='/Quiz'
              element={
                <QuestionPage
                  category={category}
                  level={level}
                  questionIndex={questionIndex}
                  setQuestionIndex={setQuestionIndex}
                  score={score}
                  setScore={setScore}
                  resetStates={resetStates}
                  
                />
              }
            />
            <Route path='/LevelChoice' element={<LevelChoice />} />
            <Route path="/score" element={<Score score={score} />}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;