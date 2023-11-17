import "./Styles/App.css";
import { useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("Keep calm and play Minecraft.");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  return (
    <div id="container">
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p>
      You have fetched <strong>{props.count}</strong> advices so far.
    </p>
  );
}
