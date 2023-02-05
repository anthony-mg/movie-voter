import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as Socket from "../services/Socket.js";

const Room = () => {
  const { state } = useLocation();
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    let socket = Socket.initSocketConnection(state, participants, setParticipants);

    return () => {
      Socket.disconnectSocket(socket);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container">
        <h2>Movie Pool</h2>
      </div>
      <div className="container">
        <h2>Participants</h2>
        <div>
          {participants.map((participant, index) => (
            <li className="list-none" key={index}>
              {participant}
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default Room;
