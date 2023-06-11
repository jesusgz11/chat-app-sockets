import { useSelector } from 'react-redux';
import InboxPeople from '../components/InboxPeople';
import Messages from '../components/Messages';
import '../css/chat.css';
import { selectActiveChat } from '../store/selectors/chat-selector';
import ChatSelect from '../components/ChatSelect';

function ChatPage() {
  const activeChatUid = useSelector(selectActiveChat);
  return (
    <div className="messaging">
      <div className="inbox_msg">
        <InboxPeople />
        {activeChatUid ? <Messages /> : <ChatSelect />}
      </div>
    </div>
  );
}

export default ChatPage;
