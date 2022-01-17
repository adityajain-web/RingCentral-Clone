import { Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import App from './App';
import store from './store/index.js';
import { positions, transitions, Provider as AlertProvider } from 'react-alert'
import alertTemplate from 'react-alert-template-basic'
import reportWebVitals from './reportWebVitals';

const options = {
    timeout: 5000,
    positions: positions.BOTTOM_CENTER,
    transitions: transitions.SCALE
}

render(<Fragment><BrowserRouter><Provider store={store}><AlertProvider template={alertTemplate} {...options} ><App /></AlertProvider></Provider></BrowserRouter></Fragment>, document.getElementById('root'), () => console.log("😀"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
