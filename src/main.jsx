import React from 'react';
import ReactDOM from 'react-dom/client';
import ChatApp from './ChatApp';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store';
import SocketProvider from './context/SocketProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <SocketProvider>
        <ChatApp />
      </SocketProvider>
    </Provider>
  </React.StrictMode>
);
