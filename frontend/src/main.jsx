import ReactDOM from 'react-dom';
import React from 'react';
import Tick from './pages/timer.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));

function timer() {
    root.render(<Tick />);
}

setInterval(timer, 1000);