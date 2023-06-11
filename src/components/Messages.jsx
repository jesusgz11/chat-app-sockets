import { useSelector } from 'react-redux';
import { selectUserId } from '../store/selectors/auth-selector';
import IncomingMessage from './IncomingMessage';
import MessageInput from './MessageInput';
import OutgoingMessage from './OutgoingMessage';
import { selectMessages } from '../store/selectors/chat-selector';
import { useEffect } from 'react';
import { scrollToBottom } from '../helpers/scrollToBottom';

function Messages() {
  const userId = useSelector(selectUserId);
  const messages = useSelector(selectMessages);

  useEffect(() => {
    scrollToBottom('messages-history', 250);
  }, [messages]);

  return (
    <div className="mesgs">
      <div id="messages-history" className="msg_history">
        {messages?.map((message) =>
          message.to === userId ? (
            <IncomingMessage key={message._id} {...message} />
          ) : (
            <OutgoingMessage key={message._id} {...message} />
          )
        )}
      </div>
      <MessageInput />
    </div>
  );
}

export default Messages;
