import { useEffect, useState } from "react";

const Timer = ({ startTime }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = () => {
    const time = Date.now() - startTime;

    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);
    return () => clearInterval(interval);
  });

  return (
    <h1>
      {("0" + hours).slice(-2)}:{("0" + minutes).slice(-2)}:
      {("0" + seconds).slice(-2)}
    </h1>
  );
};

export default Timer;
