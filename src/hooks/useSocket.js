import { useCallback, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export const useSocket = (serverPath) => {
  const [online, setOnline] = useState(false);
  const [socket, setSocket] = useState(null);

  const connectSocket = useCallback(() => {
    const tempSocket = io(serverPath, {
      transports: ['websocket'],
      forceNew: true,
      autoConnect: true,
      query: {
        'x-token': localStorage.getItem('token'),
      },
    });
    setSocket(tempSocket);
  }, [serverPath]);

  const disconnectSocket = useCallback(() => {
    socket?.disconnect();
  }, [socket]);

  useEffect(() => {
    setOnline(socket?.connected);
  }, [socket]);

  useEffect(() => {
    socket?.on('connect', () => {
      setOnline(true);
    });
  }, [socket]);

  useEffect(() => {
    socket?.on('disconnect', () => {
      setOnline(false);
    });
  }, [socket]);

  return {
    socket,
    online,
    connectSocket,
    disconnectSocket,
  };
};
