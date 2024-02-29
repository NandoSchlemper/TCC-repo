import React, { useState, useEffect } from 'react';

function Tick() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div>
      <h2>It is {currentTime.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Tick;
