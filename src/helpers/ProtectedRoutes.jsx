import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { renewToken } from '../store/slices/auth/thunks';
import { selectUserId } from '../store/selectors/auth-selector';

function ProtectedRoutes({ children }) {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);

  useEffect(() => {
    (async () => {
      try {
        if (userId || !token) return;
        await dispatch(renewToken({ token })).unwrap();
      } catch (error) {
        localStorage.clear();
        navigate('/auth/login', { replace: true });
      }
    })();
  }, [token, navigate, dispatch, userId]);

  return token ? children : <Navigate to="/auth/login" />;
}

export default ProtectedRoutes;
