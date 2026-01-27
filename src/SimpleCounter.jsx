import { useState } from "react";

export const SimpleCounter = () => {
  const [count, setCount] = useState(0);
  console.log("Render phase, count: ", count);

  const handleClick = () => {
    // console.log("Before setCount, count is: ", count);
    setCount(count + 1);
    console.log("After setCount(count+1), count is: ", count);
    setCount(count + 5);
    console.log("After setCount(count+5), count is: ", count);
    setCount(count + 10);
    console.log("After setCount(count+10), count is: ", count);
    setTimeout(() => {
      console.log("After 2s, count is: ", count);
    }, 2000);
    // console.log("After setCount, count is: ", count);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increment </button>
    </div>
  );
};
