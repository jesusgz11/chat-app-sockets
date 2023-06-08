import { useContext } from 'react';
import { SocketContext } from '../context/Socket';

export const useSocketContext = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw Error('useSocketContext must be used inside SocketProvider');
  }
  return context;
};
