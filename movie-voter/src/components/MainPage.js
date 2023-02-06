import Nickname from "./Nickname";

const MainPage = ({ nickname, setNickname }) => {
  return (
    <div className="flex text-center h-screen">
      <div className="m-auto">
        <h1 className=" text-3xl m-3">Movie Poll</h1>
        <div className="m-auto place-items-center">
          <Nickname
            onPickNickname={(nickname) => {
              setNickname(nickname);
            }}
            nickname={nickname}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
