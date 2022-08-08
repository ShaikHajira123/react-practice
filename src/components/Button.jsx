export const Button = ({ handleStart, handleStop, handleReset }) => {
  return (
    <>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
