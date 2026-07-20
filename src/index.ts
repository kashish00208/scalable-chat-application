import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 3000 });

let totalConnection = 0;

wss.on("connection", (socket) => {
  totalConnection++;
  console.log("Client connected");
  console.log("Total clients:", totalConnection);

  socket.on("message", (data) => {
    console.log(data.toString());

    socket.send(
      JSON.stringify({
        message: "Received!",
      })
    );
  });

  socket.on("close", () => {
    totalConnection--;
    console.log("Client disconnected");
    console.log("Total clients:", totalConnection);
  });
});