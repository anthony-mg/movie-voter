import React from "react";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
const io = require("socket.io-client");

const Room = () => {
  const { state } = useLocation();
  const participants = useRef([]);

  useEffect(() => {
    const socket = io("http://localhost:5000");
    socket.on("connect", () => {
      console.log("CONNECTED: ", socket.id, "\n", JSON.stringify({ ...state }));
      socket.emit("join", state.roomID, state.nickname);
    });

    socket.on("disconnect", () => {
      console.log("DISCONNECTED: ", socket.id);
    });

    socket.on("newUser", (nickname) => {
      console.log(nickname, "has joined the room.");
      participants.current = [...participants.current, nickname];
      console.log(participants);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("pong");
      socket.disconnect();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container"></div>
      <div className="container"></div>
    </>
  );
};

export default Room;
