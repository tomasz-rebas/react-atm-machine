const MAX_BALANCE = 999_999_999;

export const Controls = ({
  balance,
  setBalance,
  transaction,
  setTransaction,
}) => {
  const canWithdraw = transaction > 0 && transaction <= balance;
  const canDeposit = transaction > 0 && balance + transaction <= MAX_BALANCE;

  const handleClear = () => {
    setTransaction(0);
  };

  const handleWithdraw = () => {
    if (canWithdraw) {
      setBalance((prev) => prev - transaction);
      setTransaction(0);
    }
  };

  const handleDeposit = () => {
    if (canDeposit) {
      setBalance((prev) => prev + transaction);
      setTransaction(0);
    }
  };

  return (
    <div className="controls">
      <button onClick={handleClear}>Clear</button>
      <button onClick={handleWithdraw} disabled={!canWithdraw}>
        Withdraw
      </button>
      <button onClick={handleDeposit} disabled={!canDeposit}>
        Deposit
      </button>
      <button disabled />
    </div>
  );
};
