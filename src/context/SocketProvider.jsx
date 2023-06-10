import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SocketContext } from './Socket';
import { useSocket } from '../hooks/useSocket';
import { selectUserId } from '../store/selectors/auth-selector';
import { setUsers } from '../store/slices/chat/chat-slice';

const SocketProvider = ({ children }) => {
  const dispatch = useDispatch();
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

  useEffect(() => {
    socket?.on('users-list', (users = []) => {
      dispatch(setUsers(users));
    });
  }, [socket, dispatch]);

  return (
    <SocketContext.Provider value={valueProvider}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
