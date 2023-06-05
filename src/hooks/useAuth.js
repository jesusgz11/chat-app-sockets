import { useDispatch, useSelector } from 'react-redux';
import { selectAuthState } from '../store/selectors/auth-selector';
import apiChat from '../axios/chat-socket-server';
import { logout, login } from '../store/slices/auth/auth-slice';
import Swal from 'sweetalert2';
import { saveToken } from '../helpers/saveToken';

const useAuth = () => {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();

  const loginUser = async ({ email, password }) => {
    try {
      const { data: axiosData } = await apiChat.post('auth/login', {
        email,
        password,
      });
      const token = axiosData.data?.token;
      const user = axiosData.data?.user;
      dispatch(login({ ...user }));
      saveToken(token);
    } catch (error) {
      Swal.fire('Error', error.response.data.message, 'error');
      dispatch(logout());
    }
  };
  return {
    authState,
    loginUser,
  };
};

export default useAuth;
