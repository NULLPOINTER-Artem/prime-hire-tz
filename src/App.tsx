import { Routes, Route, Navigate } from "react-router-dom";
import TimerLeft from "./components/TimerLeft";
import GamePage from "./pages/GamePage";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <TimerLeft useTimer={true} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game-win" element={<GamePage />} />
        <Route path="/prime-hire-tz/*" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
