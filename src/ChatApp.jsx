import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';

function ChatApp() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default ChatApp;
