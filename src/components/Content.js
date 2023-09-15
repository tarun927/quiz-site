import { useContext } from "react";
import { useNavigate } from "react-router";
import QuizContext from "../context/QuizContext";
import Header from "./Header";
import SingleQues from "./SingleQues";

const Content =()=>{

   const {userQuiz,setUserQuiz,currQues,setCurrQues} = useContext(QuizContext);
   let navigate = useNavigate();

   function updateUserQuiz(){
      let tempUserQuiz = JSON.parse(JSON.stringify(userQuiz));

      let currQuesIdx = tempUserQuiz.findIndex(el=>el.qId===currQues.qId)
      tempUserQuiz[currQuesIdx] = JSON.parse(JSON.stringify(currQues));
      tempUserQuiz[currQuesIdx].submitted = true;

      setCurrQues(tempUserQuiz[currQuesIdx])
      setUserQuiz(tempUserQuiz)
   }

   function ansSubmit(){
      updateUserQuiz()
      navigate("/feedback");
   }

   return(
      <>
       <Header afterTimer={ansSubmit}/>
       <SingleQues currQues={currQues} setCurrQues={setCurrQues}/>
       <div className="text-center"><button className="submit-btn" onClick={ansSubmit}>Submit</button></div>
      </>
   )
}
export default Content;