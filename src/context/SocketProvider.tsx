"use client";

import React, { ReactNode, createContext, useContext, useMemo } from "react";
import { Manager, Socket, io } from "socket.io-client";
import { SocketConfig } from "../config/config";

interface IProps {
  children: ReactNode;
}

const {
  baseUrl,
  namespace: { ROOM, CHAT },
  path,
} = SocketConfig;

// const socketManager = new Manager(baseUrl, { path, autoConnect: false });
// const roomSocket = socketManager.socket(ROOM);
// const chatSocket = socketManager.socket(CHAT);
const roomSocket = io(`${baseUrl}/${ROOM}`, { path, autoConnect: false });
const chatSocket = io(`${baseUrl}/${CHAT}`, { path, autoConnect: false });

export interface ISocketContext {
  roomSocket: Socket;
  chatSocket: Socket;
}

const SocketContext = createContext<ISocketContext>({} as ISocketContext);
export const useSocketContext = () => useContext(SocketContext);

function SocketProvider({ children }: IProps) {
  const value = useMemo(() => {
    return { roomSocket, chatSocket };
  }, []);

  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
}

export default SocketProvider;
