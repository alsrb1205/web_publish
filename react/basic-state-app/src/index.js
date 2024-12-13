import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppForm from './component/form/AppForm';
// import CgvLoginForm from './component/form/CgvLoginForm';
// import AppAladin from './component/aladin/AppAladin';
// import AppAladin2 from './component/aladin2/AppAladin2';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import AppAvatar from './component/avatar/AppAvatar';
// import AppCounter from './component/counter/AppCounter'
// import AppBestSeller from './component/yes24/AppBestSeller'
// import AppOlive from './component/olive/AppOlive.jsx';
// import AppCounter2 from './component/counter2/AppCounter2.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppForm/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
