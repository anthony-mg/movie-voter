import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./components/MainRoutes";
import { useState } from "react";

function App() {
  const [nickname, setNickname] = useState("");

  return (
    <Router>
      <div>
        <MainRoutes nickname={nickname} setNickname={setNickname} />
      </div>
    </Router>
  );
}

export default App;
