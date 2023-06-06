import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import apiChat from '../axios/chat-socket-server';
import { saveToken } from './saveToken';

function ProtectedRoutes({ children }) {
  const token = localStorage.getItem('token');

  useEffect(() => {
    (async () => {
      try {
        const { data: axiosData } = await apiChat('auth/renew-token', {
          headers: {
            'x-token': token,
          },
        });
        saveToken(axiosData.data?.token);
      } catch (error) {
        localStorage.clear();
      }
    })();
  }, [token]);

  return token ? children : <Navigate to="/auth/login" />;
}

export default ProtectedRoutes;
