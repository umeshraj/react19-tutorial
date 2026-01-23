import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  //   let count = 0;
  console.log("Counter component rendered with count:", count);
  const handleClick = () => {
    // count += 1;
    setCount(count + 1);
    // console.log(count);
  };
  return <button onClick={handleClick}>Count:{count}</button>;
};
