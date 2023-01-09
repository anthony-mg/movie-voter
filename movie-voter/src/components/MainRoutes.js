import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />}></Route>
    </Routes>
  );
};

export default Main;
