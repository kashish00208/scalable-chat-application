import WebSocket, { WebSocketServer } from "ws";

interface Backend {
    url: string;
    activeConnections: number;
}

class WebSocketRelayer {
    private wss: WebSocketServer;
    private backends: Backend[];

    constructor(port: number, backendUrls: string[]) {
        this.backends = backendUrls.map(url => ({
            url,
            activeConnections: 0,
        }));

        this.wss = new WebSocketServer({ port });

        this.wss.on("connection", (client) => {
            this.handleClient(client);
        });

        console.log(`Relay listening on :${port}`);
    }

    private selectBackend(): Backend {
        return this.backends.reduce((a, b) =>
            a.activeConnections < b.activeConnections ? a : b
        );
    }

    private handleClient(client: WebSocket) {
        const backend = this.selectBackend();
        backend.activeConnections++;

        console.log(
            `Routing client -> ${backend.url} (${backend.activeConnections} active)`
        );

        const upstream = new WebSocket(backend.url);

        upstream.on("open", () => {
            client.on("message", (msg) => {
                if (upstream.readyState === WebSocket.OPEN) {
                    upstream.send(msg);
                }
            });

            upstream.on("message", (msg) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(msg);
                }
            });
        });

        const cleanup = () => {
            backend.activeConnections--;

            if (client.readyState === WebSocket.OPEN)
                client.close();

            if (upstream.readyState === WebSocket.OPEN)
                upstream.close();

            console.log(
                `Disconnected from ${backend.url} (${backend.activeConnections} active)`
            );
        };

        client.on("close", cleanup);
        upstream.on("close", cleanup);

        client.on("error", cleanup);
        upstream.on("error", cleanup);
    }
}

new WebSocketRelayer(8080, [
    "ws://localhost:9001",
    "ws://localhost:9002",
    "ws://localhost:9003",
]);