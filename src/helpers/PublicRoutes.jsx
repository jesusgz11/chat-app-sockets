import { Navigate } from 'react-router-dom';

function PublicRoutes({ children }) {
  const token = localStorage.getItem('token');

  return !token ? children : <Navigate to="/" />;
}

export default PublicRoutes;
