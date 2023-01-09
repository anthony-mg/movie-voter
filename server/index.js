const express = require("express");
const socket = require("socket.io");
const PORT = 5000;
const app = express();

let server = app.listen(PORT, () => console.log("Started listening on PORT: ", PORT));
let io = socket(server);
