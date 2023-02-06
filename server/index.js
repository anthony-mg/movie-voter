const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const httpServer = require("http").createServer(app);
const PORT = 5000 || process.env.SERVER_PORT;
const { RoomStore } = require("./RoomStore.js");
const rooms = new RoomStore();


//Create socket server and allow connection from client
const io = require("socket.io")(httpServer, {
  cors: {
    origins: [process.env.CLIENT_URL],
    methods: ["GET", "POST"],
  },
});

//Use cors for http server
app.use(cors());
//start server
httpServer.listen(PORT, () => console.log("Started listening on PORT: ", PORT));


//When a client connects
io.on("connection", (socket) => {

  console.log("CONNECTED:", socket.id);
  //Set by the client before they connect
  const nickname = socket.handshake.auth.nickname;
  const roomID = socket.handshake.auth.roomID;

  //From client input 
  socket.join(roomID);

  //Get the room from memory storage
  participants = rooms.findRoom(roomID);

  //Create the room if there is none. Else, add participant to list of participants. Sent back to all clients.
  if (!participants) {
    rooms.saveRoom(roomID, [{ nickname: nickname, socketID: socket.id }]);
  } else {
    rooms.addNewParticipant(roomID, nickname, socket.id);
  }

  //Send list of updated participants
  io.emit(
    "newUser",
    rooms.findRoom(roomID).map((participant) => participant.nickname)
  );

  //Remvove the participant
  socket.on("disconnecting", (reason) => {
    rooms.removeParticipant(roomID, nickname);
    const room = rooms.findRoom(roomID);
    io.emit(
      "userDisconnect",
      room.map((participant) => participant.nickname)
    );

    //delete the room if the only one left
    if (room.length == 0) rooms.deleteRoom(roomID);
  });

  socket.on("disconnect", (reason) => {
    console.log("socket", socket.id, "disconnected. REASON:", reason);
  });
});
