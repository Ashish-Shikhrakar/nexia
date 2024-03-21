const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000" }));
server = http.createServer(app);

let availableRoomID = null;
let hostId = null;

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("connected", socket.id);

  socket.on("send_generated_UID", (generatedUID) => {
    hostId = socket.id;
    console.log(hostId);
    availableRoomID = generatedUID;
    console.log(generatedUID);
    socket.join(availableRoomID);
  });

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
    io.to(availableRoomID).emit("party_started");
  });

  socket.on("stopAudio", (songId) => {
    console.log("Pausing song!");
    io.to(availableRoomID).emit("pauseTrack", songId);
  });

  socket.on("startAudio", (selectedIndex) => {
    console.log("Playing song!");
    console.log(hostId);
    console.log(selectedIndex);
    io.to(hostId).emit("playTrack", selectedIndex);
  });

  socket.on("musicStartSignal", (host, index) => {
    io.to(availableRoomID).emit("musicStartResponse", host, index);
  });
  socket.on("usersAddedMusic", (index) => {
    console.log("music from user");
    io.to(hostId).emit("musicStartResponse", true, index);
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
