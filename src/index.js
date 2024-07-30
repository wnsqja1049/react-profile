import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './style.css';

import App from './App';
import FullPageApp from './FullPageApp';
import PageableApp from './PageableApp';
import CursorApp from './CursorApp';
import AnotherCursorApp from './AnotherCursorApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <React.StrictMode> */}
    {/* <App /> */}
    {/* <FullPageApp /> */}
    {/* <PageableApp /> */}
    {/* <CursorApp /> */}
    <PageableApp />
    {/* </React.StrictMode> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
