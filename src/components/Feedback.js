import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import QuizContext from "../context/QuizContext";
import SingleQues from "./SingleQues";
import Timer from "./Timer";

const Feedback = () => {
  let navigate = useNavigate();
  const [feedbackText,setfeedBackText] = useState("No-Response");
  const {userQuiz,setUserQuiz,currQues,setCurrQues} = useContext(QuizContext);

  useEffect(()=>{
      if(currQues.ans.some(el=>el.marked===true)){
        let isCorrect = currQues.ans.some(el=>el.marked===true && el.correct===true)
        setfeedBackText(isCorrect ? "Right-Answer" : "Wrong-Answer")
      }
  },[])

  let currQuesIdx = userQuiz.findIndex((el) => el.qId === currQues.qId);
  function moveToNextQues() {
    updateUserQuiz();
    if (currQuesIdx < userQuiz.length-1) {
      setCurrQues(userQuiz[++currQuesIdx]);
      navigate("/");
    }
  }

  function moveToScore(){
      navigate("/score")
  }

  function updateUserQuiz(){
    let tempUserQuiz = JSON.parse(JSON.stringify(userQuiz));

    let currQuesIdx = tempUserQuiz.findIndex(el=>el.qId===currQues.qId)
    tempUserQuiz[currQuesIdx] = JSON.parse(JSON.stringify(currQues));
    tempUserQuiz[currQuesIdx].submitted = true;

    setCurrQues(tempUserQuiz[currQuesIdx])
    setUserQuiz(tempUserQuiz)
 }
  return (
    <div className="feedback">
      Feedback :    
      <SingleQues currQues={currQues} setCurrQues={setCurrQues} forFeedback={true} feedbackText={feedbackText}/>
      <div className="feedback-timer">
        
        {currQuesIdx < userQuiz.length-1 ? <>Moving to next question in <Timer second={5} afterTimer={moveToNextQues} /></> : <>Showing your score in<Timer second={5} afterTimer={moveToScore} /></>}
      </div>
    </div>
  );
};
export default Feedback;
