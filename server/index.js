const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const httpServer = require("http").createServer(app);
const PORT = 5000;

const io = require("socket.io")(httpServer, {
  cors: {
    origins: ["http://192.168.0.12:3000"],
    methods: ["GET", "POST"],
  },
});

httpServer.listen(PORT, () => console.log("Started listening on PORT: ", PORT));

io.on("connection", (socket) => {
  socket.on("join", (roomID, nickname) => {
    socket.join(roomID);
    console.log("Socket: ", socket.id, "joined room", roomID);
    io.to(roomID).emit("newUser", nickname);
  });

  socket.on("disconnect", (reason) => {
    console.log("socket", socket.id, "disconnected. REASON:", reason);
  });
});
