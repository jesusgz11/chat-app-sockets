import { useState } from 'react';
import { useSocketContext } from '../hooks/useSocketContext';
import { selectUserId } from '../store/selectors/auth-selector';
import { useSelector } from 'react-redux';
import { selectActiveChat } from '../store/selectors/chat-selector';

function MessageInput() {
  const userId = useSelector(selectUserId);
  const chatId = useSelector(selectActiveChat);

  const { socket } = useSocketContext();
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message.trim().length === 0) return;
    socket?.emit('personal-message', {
      from: userId,
      to: chatId,
      message,
    });
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="type_msg row">
        <div className="input_msg_write col-sm-9">
          <input
            value={message}
            onChange={handleInputChange}
            type="text"
            className="write_msg"
            placeholder="Mensaje..."
          />
        </div>
        <div className="col-sm-3 text-center">
          <button className="msg_send_btn mt-3">enviar</button>
        </div>
      </div>
    </form>
  );
}

export default MessageInput;
