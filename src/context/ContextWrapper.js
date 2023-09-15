import { useState } from "react"
import QuizContext from "./QuizContext"
import { quizData } from "../constants"

const ContextWrapper=({children})=>{
    const [quizDataOriginal] = useState(quizData);
    const [userQuiz,setUserQuiz] = useState(quizData);
    const [currQues, setCurrQues] = useState(quizData[0]);

    return(
            <QuizContext.Provider value={{quizDataOriginal,userQuiz,setUserQuiz,currQues,setCurrQues}}>
                {children}
            </QuizContext.Provider>
    )
}
export default ContextWrapper;