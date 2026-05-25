import { WebSocketServer } from 'ws';

const server = new WebSocketServer({
    port:8081
})

let totalConnection = 0;

server.on('connection',(socket)=>{
    console.log("Client connected",totalConnection++)


    socket.on('message',(message)=>{
        console.log(`Received message from Client ${totalConnection} ${message}`)
        socket.send(`Server  : ${message}`)
    });

    if (totalConnection >3) {
        socket.close();
    }

    socket.on('close',()=>{
        console.log('Clinet disconnected')
    })
})


console.log('WebSocket server is running on ws://localhost:8081');