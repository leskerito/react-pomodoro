import React from "react";

function Modifier({ name, length, handleLength }) {
  const decrement = () =>
    handleLength({ type: name, op: (entry) => entry - 1 });

  const increment = () =>
    handleLength({ type: name, op: (entry) => entry + 1 });

  return (
    <div id={name + "-div"}>
      <div id={name + "-label"}>Duration of the {name}</div>
      <div id="length-modifiers">
        <button id={name + "-decrement"} onClick={decrement}>
          -
        </button>
        <button id={name + "-increment"} onClick={increment}>
          +
        </button>
      </div>
      <div id={name + "-length"}>{length}</div>
    </div>
  );
}

export default Modifier;
