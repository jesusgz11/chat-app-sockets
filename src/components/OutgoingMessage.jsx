import { hourMonth } from '../helpers/hourMonth';

function OutgoingMessage({ message, createdAt }) {
  return (
    <div className="outgoing_msg">
      <div className="sent_msg">
        <p>{message}</p>
        <span className="time_date">{hourMonth(createdAt)}</span>
      </div>
    </div>
  );
}

export default OutgoingMessage;
