import { useDispatch, useSelector } from 'react-redux';
import { selectActiveChat } from '../store/selectors/chat-selector';
import { setActiveChat } from '../store/slices/chat/chat-slice';
import { getHistoryChat } from '../store/slices/chat/thunks';

function SidebarChatItem({ online, username, uid }) {
  const chatUid = useSelector(selectActiveChat);
  const dispatch = useDispatch();

  const handleClickChat = () => {
    dispatch(setActiveChat(uid));
    dispatch(getHistoryChat(uid));
  };

  return (
    <div
      className={`chat_list ${chatUid === uid ? 'active_chat' : ''}`}
      onClick={handleClickChat}
    >
      <div className="chat_people">
        <div className="chat_img">
          <img
            src="https://img.freepik.com/free-icon/user_318-159711.jpg?w=2000"
            alt="sunil"
          />
        </div>
        <div className="chat_ib">
          <h5>{username}</h5>
          {online ? (
            <span className="text-success">Online</span>
          ) : (
            <span className="text-danger">Offline</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default SidebarChatItem;
