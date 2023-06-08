import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SocketContext } from './Socket';
import { useSocket } from '../hooks/useSocket';
import { selectUserId } from '../store/selectors/auth-selector';

const SocketProvider = ({ children }) => {
  const { socket, online, disconnectSocket, connectSocket } = useSocket(
    import.meta.env.VITE_SERVER_URL
  );
  const userId = useSelector(selectUserId);

  const valueProvider = {
    socket,
    online,
  };

  useEffect(() => {
    if (userId) {
      connectSocket();
    }
  }, [userId, connectSocket]);

  useEffect(() => {
    if (!userId) {
      disconnectSocket();
    }
  }, [userId, disconnectSocket]);

  return (
    <SocketContext.Provider value={valueProvider}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
