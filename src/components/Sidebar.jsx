import { useSelector } from 'react-redux';
import SidebarChatItem from './SidebarChatItem';
import { selectChatUsers } from '../store/selectors/chat-selector';
import { selectUserId } from '../store/selectors/auth-selector';

function Sidebar() {
  const chatUsers = useSelector(selectChatUsers);
  const userId = useSelector(selectUserId);
  return (
    <div className="inbox_chat">
      {chatUsers
        ?.filter((user) => user.uid !== userId)
        ?.map((user) => (
          <SidebarChatItem key={user.uid} {...user} />
        ))}
      <div className="extra_space"></div>
    </div>
  );
}

export default Sidebar;
