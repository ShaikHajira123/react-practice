import { Button } from "./Button";
import { useEffect, useState } from "react";
import { Timer } from "./Timer";

export const Stopwatch = () => {
  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = null;
    if (start === true && stop === false) {
      interval = setInterval(() => {
        setCount((count) => count + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [start, stop]);

  const handleStart = () => {
    setStart(true);
    setStop(false);
  };
  const handleStop = () => {
    setStart(false);
    setStop(!stop);
  };
  const handleReset = () => {
    setStart(true);
    setCount(0);
  };
  return (
    <>
      <Timer count={count} />
      <Button
        handleStart={handleStart}
        handleStop={handleStop}
        handleReset={handleReset}
      />
    </>
  );
};
