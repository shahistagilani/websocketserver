import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws) {
 
  ws.send("Hello! I am a WEBSOCKET SERVER...!");
  
  ws.on("message", function message(data) {
    console.log("received from client: %s", data);
  });
});