import React, { useState } from "react";

const Counter = () => {
  const getCurrentTime = (): string =>
    new Date().toLocaleTimeString("nu", {
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  setInterval(() => {
    const currentTime = getCurrentTime();
    setCurrentTime(currentTime);
  }, 1000);

  return (
    <div className="counter__container">
      <span className="counter">{currentTime}</span>
    </div>
  );
};

export default Counter;
