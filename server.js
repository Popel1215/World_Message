import { WebSocketServer } from "ws";

// WebSocket-Server auf Port 3000 starten
const wss = new WebSocketServer({ port: 3000 });

console.log("WebSocket-Server läuft auf ws://localhost:3000");

wss.on("connection", ws => {
    console.log("Neuer Client verbunden");

    ws.on("message", message => {
        console.log("Nachricht erhalten:", message.toString());

        // Nachricht an alle verbundenen Clients senden
        wss.clients.forEach(client => {
            if (client.readyState === 1) {
                client.send(message.toString());
            }
        });
    });

    ws.on("close", () => {
        console.log("Client hat die Verbindung geschlossen");
    });
});


// weiter machen in script socket.send(username + ": " + message);

