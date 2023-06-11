import { hourMonth } from '../helpers/hourMonth';

function IncomingMessage({ message, createdAt }) {
  return (
    <div className="incoming_msg">
      <div className="incoming_msg_img">
        <img
          src="https://img.freepik.com/free-icon/user_318-159711.jpg?w=2000"
          alt="sunil"
        />
      </div>
      <div className="received_msg">
        <div className="received_withd_msg">
          <p>{message}</p>
          <span className="time_date">{hourMonth(createdAt)}</span>
        </div>
      </div>
    </div>
  );
}

export default IncomingMessage;
