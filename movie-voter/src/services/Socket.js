import { io } from "socket.io-client";

export let socket;

export function initSocketConnection(state, participants, setParticipants) {
  let url = process.env.REACT_APP_SERVER_URL + ":5000"

  socket = io(url, { autoConnect: false });

  socket.auth = { nickname: state.nickname, roomID: state.roomID };
  socket.connect();

  //New user joined the room. Add to participants.
  socket.on("newUser", (currentParticipants) => {
    setParticipants([...currentParticipants]);
  });

  //User left. Remove from participants
  socket.on("userDisconnect", (currentParticipants) => {
    setParticipants(currentParticipants);
  });
  return socket;
}

//useEffect cleanup function. Ensures only one connection is made even after re-renders
export function disconnectSocket(socket) {
  socket.off("connect");
  socket.off("disconnect");
  socket.off("pong");
  socket.disconnect();
}
