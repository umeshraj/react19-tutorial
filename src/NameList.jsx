export const NameList = () => {
  const names = ["Alice", "Bob", "Charlie", "Diana", "Ethan"]; // Example array of names
  const namesList = names.map((name, index) => <h2 key={index}>{name}</h2>);
  return <div>{namesList}</div>;
};
