import { useContext, useEffect, useState } from "react";
import QuizContext from "../context/QuizContext";
import Timer from "./Timer";


const Header=({afterTimer})=>{
    
    const [progressVal,setProgressVal] = useState(0);
    const {userQuiz} = useContext(QuizContext);
    
    useEffect(()=>{
      let solvedQues = userQuiz.reduce((accu,curr)=>{
         if(curr.submitted) accu++;
         return accu;
      },0)
      setProgressVal(solvedQues)
    })
    return(
        <div className="header">
            <Timer second={15} afterTimer={afterTimer}/>
            <div className="test-progress">
            <label htmlFor="test-perc">Quiz Completion progress: </label>
                <progress id="text-perc" value={progressVal} max={userQuiz.length}></progress>
            </div>
        </div>
    )
}
export default Header;