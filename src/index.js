import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';
import App from './App';

Kommunicate.init("12fec5dbb7aef371f80893114dda5f3ad" , {"popupWidget": true, "automaticChatOpenOnNavigation": true, "theme": {
  "name": "dark"
}})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
