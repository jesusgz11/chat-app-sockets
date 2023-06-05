import IncomingMessage from './IncomingMessage';
import MessageInput from './MessageInput';
import OutgoingMessage from './OutgoingMessage';

function Messages() {
  return (
    <div className="mesgs">
      <div className="msg_history">
        <IncomingMessage />
        <OutgoingMessage />
      </div>
      <MessageInput />
    </div>
  );
}

export default Messages;
