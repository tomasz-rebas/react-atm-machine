export const Controls = ({ setBalance, transaction, setTransaction }) => {
  const handleClear = () => {
    setTransaction(0);
  };

  const handleWithdraw = () => {
    setBalance((prev) => prev - transaction);
    setTransaction(0);
  };

  const handleDeposit = () => {
    setBalance((prev) => prev + transaction);
    setTransaction(0);
  };

  return (
    <div className="controls">
      <button onClick={handleClear}>Clear</button>
      <button onClick={handleWithdraw}>Withdraw</button>
      <button onClick={handleDeposit}>Deposit</button>
      <button disabled />
    </div>
  );
};
