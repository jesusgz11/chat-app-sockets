import { Route, Navigate, Routes } from 'react-router-dom';
import ChatPage from '../pages/ChatPage';
import AuthRouter from './AuthRouter';
import PublicRoutes from '../helpers/PublicRoutes';
import ProtectedRoutes from '../helpers/ProtectedRoutes';

function AppRouter() {
  return (
    <Routes>
      <Route
        path="/auth/*"
        element={
          <PublicRoutes>
            <AuthRouter />
          </PublicRoutes>
        }
      />
      <Route
        path="/"
        element={
          <ProtectedRoutes>
            <ChatPage />
          </ProtectedRoutes>
        }
      />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRouter;
