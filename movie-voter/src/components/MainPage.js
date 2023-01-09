import Nickname from "./Nickname";
import { useState } from "react";

const MainPage = () => {
  const [nickname, setNickname] = useState("");

  return (
    <div>
      <h1 className="title header">Movie Poll</h1>
      <div className="container">
        <Nickname
          onPickNickname={(nickname) => {
            setNickname(nickname);
          }}
          nickname={nickname}
        />
      </div>
    </div>
  );
};

export default MainPage;
