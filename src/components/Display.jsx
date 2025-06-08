export const Display = ({ balance, transaction }) => (
  <div className="display">
    <span>Balance</span>
    <span>{balance.toLocaleString("en-US")}</span>
    <span>Transaction</span>
    <span>{transaction.toLocaleString("en-US")}</span>
  </div>
);
