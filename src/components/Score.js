import { set } from "harmony-reflect";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import QuizContext from "../context/QuizContext";

const Score = () => {
  const [score, setScore] = useState(0);
  const { userQuiz,setUserQuiz,quizDataOriginal,setCurrQues } = useContext(QuizContext);
  let navigate = useNavigate();
  let correctCount = 0;

  useEffect(() => {
    userQuiz.map((el) => {
      if (el.ans.some((el) => el.marked === true && el.correct === true)) {
        ++correctCount;
      }
    });
    setScore(correctCount);

    return ()=>{
       setScore(0);
       correctCount=0;
    }
  }, []);

  useEffect(()=>{
    if(!userQuiz.some(el=>el.submitted)){
        setCurrQues(userQuiz[0]);
        navigate("/")
    }
  },[userQuiz])


  function restartQuiz(){
     setUserQuiz(JSON.parse(JSON.stringify(quizDataOriginal)));
  }

  function seeSummary(){
      navigate("/summary")
  }
  return (
    <div className="score">
      <div className="fs20px">Your Score is {(score / userQuiz.length) * 100}%</div>
      <button className="submit-btn" onClick={restartQuiz}>Restart Quiz</button>
      <button className="submit-btn" onClick={seeSummary}>See Summary</button>
    </div>
  );
};
export default Score;
