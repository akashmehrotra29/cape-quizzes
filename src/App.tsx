import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Dashboard,
  QuizPage,
  Scoreboard,
  Login,
  Signup,
  UserScoreboard,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/quiz/:quizId" element={<QuizPage />}></Route>
        <Route path="/quiz/:quizId/scoreboard" element={<Scoreboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/profile/:username" element={<UserScoreboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
