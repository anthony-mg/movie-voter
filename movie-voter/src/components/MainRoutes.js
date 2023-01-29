import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import RoomOverworld from "./RoomOverworld";
import Room from "./Room";

const Main = ({ nickname, setNickname }) => {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage nickname={nickname} setNickname={setNickname} />}></Route>
      <Route exact path="/rooms" element={<RoomOverworld nickname={nickname} />}></Route>
      <Route exact path="/newRoom" element={<Room  />}></Route>
    </Routes>
  );
};

export default Main;
