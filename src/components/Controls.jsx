const MAX_BALANCE = 999_999_999;

export const Controls = ({
  balance,
  setBalance,
  transaction,
  setTransaction,
}) => {
  const handleClear = () => {
    setTransaction(0);
  };

  const handleWithdraw = () => {
    if (transaction <= balance) {
      setBalance((prev) => prev - transaction);
      setTransaction(0);
    }
  };

  const handleDeposit = () => {
    const updatedBalance = balance + transaction;

    if (updatedBalance <= MAX_BALANCE) {
      setBalance(updatedBalance);
      setTransaction(0);
    }
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
