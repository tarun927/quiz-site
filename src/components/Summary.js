import { useContext } from "react";
import { useNavigate } from "react-router"
import QuizContext from "../context/QuizContext";
import SingleQues from "./SingleQues";

const Summary=()=>{
    const {userQuiz} = useContext(QuizContext);
    let navigate = useNavigate();
    function goToScore(){
        navigate("/score");
    }

    function updateFeedbackText(currQues){
        if(currQues.ans.some(el=>el.marked===true)){
            let isCorrect = currQues.ans.some(el=>el.marked===true && el.correct===true)
            return (isCorrect ? "Right-Answer" : "Wrong-Answer")
          }
    }

    return(
        <div className="summary">
            {
               userQuiz.map((ques)=>{
                   return <SingleQues key={ques.qId} currQues={ques} forFeedback={true} feedbackText={updateFeedbackText(ques) ? updateFeedbackText(ques) : "No-Response"}/>
               })
            }
            <div className="text-center"><button className="submit-btn" onClick={goToScore}>Go to Score</button></div>
        </div>
    )
}
export default Summary;