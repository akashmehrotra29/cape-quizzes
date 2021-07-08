import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";
import {
  Home,
  Dashboard,
  QuizPage,
  Scoreboard,
  Login,
  Signup,
  UserScoreboard,
  Leaderboard,
} from "./pages";

function App() {
  return (
    <div className="min-h-screen font-body text-center text-gray-500 box-border transition duration-500 ease-in-out dark:bg-gray-800 dark:text-gray-50">
      <Routes>
        <PrivateRoute path="/" element={<Home />}></PrivateRoute>
        <PrivateRoute path="/dashboard" element={<Dashboard />}></PrivateRoute>
        <PrivateRoute
          path="/quiz/:quizId"
          element={<QuizPage />}
        ></PrivateRoute>
        <PrivateRoute
          path="/quiz/:quizId/scoreboard"
          element={<Scoreboard />}
        ></PrivateRoute>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <PrivateRoute
          path="/profile/:username"
          element={<UserScoreboard />}
        ></PrivateRoute>
        <Route path="/leaderboard" element={<Leaderboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
