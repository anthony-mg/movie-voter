const Nickname = ({ onPickNickname, nickname }) => {
  const onSubmit = (e) => {
    e.preventDefault();

    if (!nickname) {
      alert("Please choose a nickname");

      return;
    }
    console.log("Hello", nickname, "!");
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
