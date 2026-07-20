import WebSocket from "ws";
import { describe, it, expect } from '@jest/globals';

describe("WebSocket Server", () => {
  it("should respond with 'Received!'", (done) => {
    const client = new WebSocket("ws://localhost:3000");

    client.on("open", () => {
      client.send("Hello");
    });

    client.on("message", (data) => {
      expect(JSON.parse(data.toString())).toEqual({
        message: "Received!",
      });

      client.close();
      done();
    });
  });
});