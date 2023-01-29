import { io } from "socket.io-client";

export let socket;

export function initSocketConnection(state, participants) {
  socket = io("http://localhost:5000", { autoConnect: false });

  socket.auth = { nickname: state.nickname, roomID: state.roomID };
  socket.connect();

  //New user joined the room. Add to participants.
  socket.on("newUser", (nickname) => {
    console.log(nickname, "has joined the room.");
    participants.current = [...participants.current, nickname];
  });

  //User left. Remove from participants
  socket.on("userDisconnect", (nickname) => {
    console.log(nickname, "left.");
    participants.current = participants.current.splice(
      participants.current.findIndex((name) => name === nickname),
      1
    );
    console.log(participants.current);
  });
}

//useEffect cleanup function. Ensures only one connection is made even after re-renders
export function disconnectSocket() {
  socket.off("connect");
  socket.off("disconnect");
  socket.off("pong");
  socket.disconnect();
}
