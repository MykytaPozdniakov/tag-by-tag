import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { makeServer } from './mirage';
import { AuthProvider } from './AuthContext';
import { GoogleOAuthProvider } from '@react-oauth/google';
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="248966481904-huntun2q8cadqqr2d5gbut901nktmglu.apps.googleusercontent.com">
      <AuthProvider>
          <App />
      </AuthProvider>
    </GoogleOAuthProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

fetch('/api/users')
  .then(response => response.json())
  .then(data => console.log(data));