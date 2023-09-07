import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom/client';
import '../src/styles/global.css';
import App from './App.jsx';
import React from 'react';

/*en este modulo se renderiza la app*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CookiesProvider>
      <App></App>
    </CookiesProvider>
  </BrowserRouter>
)
