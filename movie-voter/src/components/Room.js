import React from "react";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import * as Socket from "../services/Socket.js";


const Room = () => {
  const { state } = useLocation();
  const participants = useRef([]);
  

  useEffect(() => {
    Socket.initSocketConnection(state, participants);

    return () => {
      Socket.disconnectSocket();
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
