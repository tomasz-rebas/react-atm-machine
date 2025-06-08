export const Display = ({ balance, transaction }) => (
  <div className="display">
    <label>Balance</label>
    <div>{balance.toLocaleString("en-US")}</div>
    <label>Transaction</label>
    <div>{transaction.toLocaleString("en-US")}</div>
  </div>
);
