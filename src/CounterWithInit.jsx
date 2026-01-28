import { useReducer } from "react";
const initialState = 0;

const reducer = (state, action) => {
  // return new state
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const init = (initialValue) => {
  console.log("init function called. Runs only once");

  const savedCount = localStorage.getItem("count");
  if (savedCount !== null) {
    console.log("Found saved count", savedCount);
    return parseInt(savedCount);
  }
  console.log("No saved count. Using initial value ", initialState);
  return initialValue;
};

export const CounterWithInit = () => {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  return (
    <div>
      <h2>Counter with useReducer</h2>
      <p>Count: {state}</p>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};
