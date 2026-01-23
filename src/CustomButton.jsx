export const CustomButton = ({ text }) => {
  const name = "Codevolution";
  const handleClick = (e) => {
    console.log(`Hey ${name}. You clicked ${text}`);
    // console.log("Clicked element", e.target);
    // console.log("Click coordinates", e.clientX, e.clientY);
    // console.log("Which mouse button", e.button);
    // alert("Thanks for liking!");
  };
  return <button onClick={handleClick}>{text}</button>;
};
