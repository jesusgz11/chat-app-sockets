import axios from 'axios';

const apiChat = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

export default apiChat;
