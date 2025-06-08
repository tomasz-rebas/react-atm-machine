import { useState } from "react";
import { Keypad } from "./components/Keypad";
import { Controls } from "./components/Controls";
import { Display } from "./components/Display";

export const App = () => {
  const [balance, setBalance] = useState(1000000);
  const [transaction, setTransaction] = useState(0);

  return (
    <>
      <h1>ATM Machine</h1>
      <Display balance={balance} transaction={transaction} />
      <div className="keyboard">
        <Keypad setTransaction={setTransaction} />
        <Controls />
      </div>
    </>
  );
};
