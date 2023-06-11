import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/slices/auth/auth-slice';
import { selectUsername } from '../store/selectors/auth-selector';
import { resetMessages } from '../store/slices/chat/chat-slice';

function SearchBox() {
  const dispatch = useDispatch();
  const username = useSelector(selectUsername);

  const onLogout = () => {
    localStorage.clear();
    dispatch(logout());
    dispatch(resetMessages());
  };
  return (
    <div className="headind_srch">
      <div className="recent_heading mt-2">
        <h4>{username}</h4>
      </div>
      <div className="srch_bar">
        <div className="stylish-input-group">
          <button onClick={onLogout} className="btn text-danger">
            Salir
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
