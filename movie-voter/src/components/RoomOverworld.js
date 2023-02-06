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
    <div className="flex h-screen">
      <div className="m-auto text-center p bg-base-200 p-10 rounded-xl">
        <h2 className="text-xl">🍿 Hello {nickname} 🍿</h2>
        <form className="grid m-2 place-items-center" onSubmit={onJoinRoom}>
          <div className="m-2">
            <input
              className="bg-base-300 input w-full max-w-xs"
              type="text"
              placeholder="Room ID"
              onChange={(e) => {
                setRoomID(e.target.value);
              }}
            ></input>
          </div>
          <div className="m-2">
            <input type="submit" value="enter room" className="btn btn-wide shadow-lg hover:"></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RoomOverworld;
