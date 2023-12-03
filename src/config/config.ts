export const SocketConfig = {
  baseUrl: "http://localhost:4013" as const,
  path: "/yuds.socket.io" as const,
  namespace: { ROOM: "room" as const, CHAT: "chat" as const },
};
