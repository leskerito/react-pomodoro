import React from "react";

function Modifier({ name, length, handleLength }) {
  const decrement = () =>
    handleLength({ type: name, op: (entry) => entry - 1 });

  const increment = () =>
    handleLength({ type: name, op: (entry) => entry + 1 });

  return (
    <div className="block max-w-lg bg-orange-300 rounded text-center">
      <label className="text-lg font-semibold" id={name + "-label"}>Duration of the {name}</label>
      <div className="shrink-0" id="length-modifiers">
        <button className=" text-yellow-200 bg-slate-400 rounded w-9 h-7 my-auto p-1 text-center" id={name + "-decrement"} onClick={decrement}>
          -
        </button>
        <button className=" text-yellow-200 bg-slate-600 rounded w-9 h-7 my-auto p-1 text-center" id={name + "-increment"} onClick={increment}>
          +
        </button>
      </div>
      <div className="text-lg font-extralight " id={name + "-length"}>{length}</div>
    </div>
  );
}

export default Modifier;
