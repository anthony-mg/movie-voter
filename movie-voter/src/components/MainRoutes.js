import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import RoomOverworld from "./RoomOverworld";

const Main = ({ nickname, setNickname }) => {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage nickname={nickname} setNickname={setNickname} />}></Route>
      <Route exact path="/rooms" element={<RoomOverworld nickname={nickname} />}></Route>
    </Routes>
  );
};

export default Main;
