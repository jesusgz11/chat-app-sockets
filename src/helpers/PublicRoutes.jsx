import { Navigate } from 'react-router-dom';

function PublicRoutes({ children }) {
  const logged = false;
  return !logged ? children : <Navigate to="/" />;
}

export default PublicRoutes;
