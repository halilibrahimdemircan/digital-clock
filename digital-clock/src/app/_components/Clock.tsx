import React, { useState, useEffect } from 'react';
import Digit from './Digit';
import Seperator from './Seperator';

const Clock: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date): string => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}${minutes}${seconds}`;
  };

  const timeString = formatTime(time);

  return (
    <div className="flex items-center space-x-3">
      <Digit value={timeString[0]} />
      <Digit value={timeString[1]} />
      <Seperator/>
      <Digit value={timeString[2]} />
      <Digit value={timeString[3]} />
      <Seperator/>
      <Digit value={timeString[4]} />
      <Digit value={timeString[5]} />
    </div>
  );
};

export default Clock;
