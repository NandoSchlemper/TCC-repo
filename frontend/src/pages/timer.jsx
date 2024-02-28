import React from 'react';
import '/src/style/timer/timer.css'

function Tick() {
    return (
        <div>
            <h1>Hello, i'm Jullia!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    )
}

export default Tick;