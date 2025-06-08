export const Keypad = () => {
  return (
    <div className="keypad">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => (
        <button key={digit} value={digit} className="digit">
          {digit}
        </button>
      ))}
      <button disabled />
      <button value={0} className="digit">
        0
      </button>
      <button disabled />
    </div>
  );
};
