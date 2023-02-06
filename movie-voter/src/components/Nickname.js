import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Nickname = ({ onPickNickname, nickname }) => {
  const navigate = useNavigate();
  const [nicknameError, setnicknameError] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    nickname = "";
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();

    if (!nickname) {
      setnicknameError(true);
      return;
    }
    console.log("Hello", nickname, "!");
    navigate("/rooms");
  };

  return (
    <div className="grid place-items-center text-center bg-base-200 p-10 rounded-xl">
      {nicknameError ? (
        <div className="alert alert-error shadow-lg">
          <div className="h-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="m-2">Enter a nickname</span>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="m-0">
        <h1>Pick a nickname to make or join a poll room</h1>
        <form className="grid m-2 place-items-center" onSubmit={onSubmit}>
          <div className="m-2 ">
            <input
              type="text"
              maxLength={10}
              placeholder="Type here"
              onChange={(e) => onPickNickname(e.target.value)}
              className="bg-base-300 input w-full max-w-xs"
            />
            {/* <input className="shadow-lg" type="text" placeholder={"choose a nickname"} /> */}
          </div>
          <div className="m-2">
            <input type="submit" value="enter" className="btn btn-wide shadow-lg" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Nickname;
