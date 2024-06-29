import { useState } from "react";
import "./App.css";
import Payment from "./component/payment";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main style={{ display: "flex", gap: 20}}>
        <Payment/>
      </main>
    </>
  );
}

export default App;
