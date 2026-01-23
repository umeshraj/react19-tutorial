import { ActionButton } from "./ActionButton";

export const Newsletter = () => {
  const handleSubscribe = () => {
    alert("Subscribed to newsletter!");
  };
  return (
    <div>
      <h2>Subscribe to our Newsletter</h2>
      <ActionButton text="Subscribe" onClick={handleSubscribe} />
    </div>
  );
};
