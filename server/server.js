const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000" }));
server = http.createServer(app);

let availableRoomID = null;

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  console.log("connected", socket.id);

  socket.on("send_generated_UID", (generatedUID) => {
    availableRoomID = generatedUID;
    console.log(generatedUID);
    socket.join(availableRoomID);
  });

  // socket.on("validate_code", (code) => {
  //   if (code === availableRoomID) {
  //     socket.emit("code_validated", { isValid: true, code: code });
  //   } else {
  //     socket.emit("code_validated", { isValid: false });
  //   }
  // });

  socket.on("join_room", (code) => {
    if (availableRoomID === code) {
      console.log(socket.id, " Joining room");
      socket.join(availableRoomID);
    } else {
      socket.disconnect();
    }
  });

  socket.on("value_change", (data) => {
    socket.to(availableRoomID).emit("host_value_change", data);
  });

  socket.on("send_name", (name, id) => {
    currentUser = name;
    socket.to(availableRoomID).emit("receive_name", name, id);
  });

  socket.on("start_party", () => {
    console.log("Party Started");
    socket.to(availableRoomID).emit("party_started");
  });

  socket.on("stopAudio", (songId) => {
    console.log("Pausing song!");
    io.to(availableRoomID).emit("pauseTrack", songId);
  });

  socket.on("startAudio", (songId) => {
    console.log("Playing song!");
    io.to(availableRoomID).emit("playTrack", songId);
  });

  socket.on("musicStartSignal", () => {
    io.to(availableRoomID).emit("musicStartResponse");
  });

  socket.on("disconnect", () => {
    message = socket.id + " has left the party";
    console.log("Disconnected", socket.id);
    socket.to(availableRoomID).emit("user_leave", message);
  });
});

server.listen(8000, () => {
  console.log("Running Server");
});
