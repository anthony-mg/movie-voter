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
    <div className="grid h-screen place-items-center text-center gap-1">
      <div className="bg-base-300 card w-1/2 h-80 p-6 m-x-10">
        <h2 className="text-2xl">Movie Pool</h2>
      </div>
      <div className="bg-base-300 card w-96 h-60 p-6 m-0">
        <h2 className="text-2xl">Participants</h2>
        <div className=" grid grid-cols-3 text-left m-4">
          {participants.map((participant, index) => (
            <li className="list-none" key={index}>
              {participant}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Room;
