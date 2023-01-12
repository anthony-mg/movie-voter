import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
const io = require("socket.io-client");

const socket = io("http://localhost:5000");
const Room = () => {
  const { state } = useLocation();
  const [participants, setParticipants] = useState([]); // const navigate = useNavigate();

  useEffect(() => {
    socket.on("connect", () => {
      console.log("CONNECTED: ", socket.id, "\n", JSON.stringify({ ...state }));
      socket.emit("join", state.roomID, state.nickname);
    });

    socket.on("disconnect", () => {
      console.log("DISCONNECTED: ", socket.id);
    });

    socket.on("newUser", (userNickname) => {
      console.log(userNickname, "joined the room.");
      setParticipants([...participants, userNickname]);
      console.log(participants);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <>
      <div className="container"></div>
      <div className="container"></div>
    </>
  );
};

export default Room;
