import { useContext } from "react";
import QuizContext from "../context/QuizContext";

const SingleQues = ({ currQues, setCurrQues, forFeedback = false, feedbackText }) => {

  function updateCurrQues(event) {
    let updated = JSON.parse(JSON.stringify(currQues));
    let selectedOptionIdx = updated.ans.findIndex(
      (opt) => opt.val == event.target.value
    );

    updated.ans.forEach((opt, idx) => {
      opt.marked = idx == selectedOptionIdx;
    });

    setCurrQues(updated);
  }
  return (
    <div className="ques-container">
      <div>
        <div className="question">
          {"Q." + currQues.qId + " " + currQues.ques} {forFeedback && <span className={feedbackText}> : {feedbackText}</span>}
        </div>
        <div>
          {currQues.ans.map((option,idx) => {
            return (
              <div key={idx}>
                <label>
                  <input
                    type="radio"
                    value={option.val}
                    checked={option.marked===true}
                    onChange={updateCurrQues}
                    disabled={forFeedback || currQues.submitted}
                  />
                  {option.val}
                </label>
                {option.correct && forFeedback && currQues.submitted && (
                  <>&#10004;&#65039;</>
                )}
                {option.marked &&
                  !option.correct &&
                  currQues.submitted &&
                  forFeedback && <>&#10060;</>}
                <br />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default SingleQues;
