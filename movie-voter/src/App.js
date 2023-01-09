import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./components/MainRoutes";

function App() {
  return (
    <Router>
      <div>
        <MainRoutes />
      </div>
    </Router>
  );
}

export default App;
