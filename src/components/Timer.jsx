export const Timer = ({ count }) => {
  return (
    <>
      <span>{("0" + (Math.floor(count / 600000) % 60)).slice(-2)}:</span>
      <span>{("0" + (Math.floor(count / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + (Math.floor(count / 1000) % 60)).slice(-2)}:</span>
      <span>{("0" + (Math.floor(count / 10) % 100)).slice(-2)}</span>
    </>
  );
};
