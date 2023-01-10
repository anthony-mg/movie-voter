import { useNavigate } from "react-router-dom";

const Nickname = ({ onPickNickname, nickname }) => {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    if (!nickname) {
      alert("Please choose a nickname");

      return;
    }
    console.log("Hello", nickname, "!");
    navigate("/rooms");
  };

  return (
    <>
      <div>
        <h1 className="title">Pick a nickname to make or join a poll room</h1>
        <form className="nickname" onSubmit={onSubmit}>
          <div className="form-control">
            <input type="text" onChange={(e) => onPickNickname(e.target.value)} placeholder={"choose a nickname"} />
          </div>
          <div className="form-control">
            <input type="submit" value="enter" className="btn" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Nickname;
