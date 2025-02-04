import { useState, useRef } from "react";

export default function Player() {
  const playername = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handleClick() {
    setEnteredPlayerName(playername.current.value);
    playername.current.value = ""
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={playername} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}


