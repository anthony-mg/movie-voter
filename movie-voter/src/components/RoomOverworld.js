import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RoomOverworld = ({ nickname }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!nickname) {
      navigate("/");
    }
  });
  return (
    <>
      <div className="container pt-0">
        <h2 className="header pt-0 mt-0 mb-1">🍿 Hello {nickname} 🍿</h2>
        <form className="form-float">
          <div className="form-control">
            <input type="text" placeholder="Room ID"></input>
          </div>
          <div className="form-control">
            <input type="submit" value="Enter Room" className="btn btn-block"></input>
          </div>
        </form>
        <h3 className="header">or</h3>
        <div>
          <button type="button" className="btn-block">
            Make a room
          </button>
        </div>
      </div>
    </>
  );
};

export default RoomOverworld;
