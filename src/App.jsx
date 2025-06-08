import { Keypad } from "./components/Keypad";
import { Controls } from "./components/Controls";

export const App = () => {
  return (
    <>
      <h3>ATM Machine</h3>
      <div className="keyboard">
        <Keypad />
        <Controls />
      </div>
    </>
  );
};
