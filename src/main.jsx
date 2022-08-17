import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'
import './styles.css';
// const cookies = new Cookies();
// cookies.set(key1, value1, {secure: true, sameSite: 'none'});
// cookies.set(key2, value2, {secure: true, sameSite: 'none'});
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
)
 