const buildTransaction = (currentTransaction, digit) => {
  if (currentTransaction === 0 && digit === 0) {
    return currentTransaction;
  }

  if (currentTransaction === 0 && digit > 0) {
    return digit;
  }

  return currentTransaction * 10 + digit;
};

export const Keypad = ({ setTransaction }) => {
  const handleClick = (event) => {
    const digit = Number(event.target.value);
    setTransaction((prev) => buildTransaction(prev, digit));
  };

  return (
    <div className="keypad">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => (
        <button
          key={digit}
          value={digit}
          className="digit"
          onClick={handleClick}
        >
          {digit}
        </button>
      ))}
      <button disabled />
      <button value={0} className="digit" onClick={handleClick}>
        0
      </button>
      <button disabled />
    </div>
  );
};
