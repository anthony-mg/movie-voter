import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RoomOverworld = ({ nickname }) => {
  const [roomID, setRoomID] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!nickname) {
      navigate("/");
    }
  });

  const onJoinRoom = async (e) => {
    e.preventDefault();
    navigate("/newRoom", { state: { nickname: nickname, roomID: roomID } });
  };

  return (
    <>
      <div className="container pt-0">
        <h2 className="header pt-0 mt-0 mb-1">🍿 Hello {nickname} 🍿</h2>
        <form className="form-float" onSubmit={onJoinRoom}>
          <div className="form-control">
            <input
              type="text"
              placeholder="Room ID"
              onChange={(e) => {
                setRoomID(e.target.value);
              }}
            ></input>
          </div>
          <div className="form-control">
            <input type="submit" value="enter room" className="btn btn-block"></input>
          </div>
        </form>
      </div>
    </>
  );
};

export default RoomOverworld;
