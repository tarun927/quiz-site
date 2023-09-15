import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./components/Content";
import ContextWrapper from "./context/ContextWrapper";
import Feedback from "./components/Feedback";
import Score from "./components/Score";
import Summary from "./components/Summary";

function App() {
  return (
    <div className="App">
      <ContextWrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/feedback" element={<Feedback/>}/>
            <Route path="/score" element={<Score/>}/>
            <Route path="/summary" element={<Summary/>}/>
          </Routes>
        </BrowserRouter>
      </ContextWrapper>
    </div>
  );
}

export default App;
