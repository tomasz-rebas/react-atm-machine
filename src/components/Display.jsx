export const Display = ({ balance, transaction }) => (
  <div className="display">
    <label>Balance</label>
    <div>{balance}</div>
    <label>Transaction</label>
    <div>{transaction}</div>
  </div>
);
