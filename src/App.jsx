import { Keypad } from "./components/Keypad";

export const App = () => {
  return (
    <>
      <h3>ATM Machine</h3>
      <div className="keyboard">
        <Keypad />
      </div>
    </>
  );
};
