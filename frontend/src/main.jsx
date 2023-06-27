import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import '../src/styles/global.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

{/*en este modulo se renderiza la app*/}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CookiesProvider>
      <App></App>
    </CookiesProvider>
  </BrowserRouter>
)
