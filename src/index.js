import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/index.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import SpotifyApp from './SpotifyApp'
import { Provider } from 'react-redux';
import store from './store';
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
       <Router>
        <SpotifyApp />
      </Router>
      <ToastContainer />
    </Provider>
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

// import App from './App';



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
