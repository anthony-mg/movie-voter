const express = require("express");
const cors = require("cors");
const app = express();
const httpServer = require("http").createServer(app);
const PORT = 5000;
const { RoomStore } = require("./RoomStore.js");
const rooms = new RoomStore();

const io = require("socket.io")(httpServer, {
  cors: {
    origins: ["http://192.168.0.12:3000"],
    methods: ["GET", "POST"],
  },
});

app.use(cors());
httpServer.listen(PORT, () => console.log("Started listening on PORT: ", PORT));

io.on("connection", (socket) => {
  console.log("CONNECTED:", socket.id);
  const nickname = socket.handshake.auth.nickname;
  const roomID = socket.handshake.auth.roomID;

  socket.join(roomID);

  participants = rooms.findRoom(roomID);

  if (!participants) {
    rooms.saveRoom(roomID, [{ nickname: nickname, socketID: socket.id }]);
  } else {
    rooms.addNewParticipant(roomID, nickname, socket.id);
  }

  io.emit(
    "newUser",
    rooms.findRoom(roomID).map((participant) => participant.nickname)
  );

  socket.on("disconnecting", (reason) => {
    rooms.removeParticipant(roomID, nickname);
    io.emit(
      "userDisconnect",
      rooms.findRoom(roomID).map((participant) => participant.nickname)
    );
  });

  socket.on("disconnect", (reason) => {
    console.log("socket", socket.id, "disconnected. REASON:", reason);
  });
});
