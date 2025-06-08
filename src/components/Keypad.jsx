const MAX_TRANSACTION = 99_999;

const buildTransaction = (current, digit) => {
  if (current === 0 && digit === 0) {
    return current;
  }

  if (current === 0 && digit > 0) {
    return digit;
  }

  const updated = current * 10 + digit;

  if (updated > MAX_TRANSACTION) {
    return current;
  }

  return updated;
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
