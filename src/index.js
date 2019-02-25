import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Portfolio from './Portfolio.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Portfolio />, document.getElementById('root'));

serviceWorker.unregister();
