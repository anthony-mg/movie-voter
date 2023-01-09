import { useState } from "react";

const Nickname = () => {
  const [nickname, setNickname] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(nickname);

    setNickname("");
  };
  return (
    <form className="nickname" onSubmit={onSubmit}>
      <div className="form-control">
        <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder={"choose a nickname"} />
      </div>
      <div className="form-control">
        <input type="submit" value="enter" className="btn" />
      </div>
    </form>
  );
};

export default Nickname;
