import Nickname from "./Nickname";

const MainPage = ({ nickname, setNickname }) => {
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
