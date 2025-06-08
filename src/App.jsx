import { Keypad } from "./components/Keypad";
import { Controls } from "./components/Controls";
import { Display } from "./components/Display";

export const App = () => {
  return (
    <>
      <h1>ATM Machine</h1>
      <Display />
      <div className="keyboard">
        <Keypad />
        <Controls />
      </div>
    </>
  );
};
