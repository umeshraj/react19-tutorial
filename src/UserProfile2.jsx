import { useState } from "react";

export const UserProfile2 = () => {
  const [user, setUser] = useState({
    name: "Bruce Wayne",
    age: 35,
    email: "batman.com",
    address: {
      city: "Gotham",
      country: "USA",
    },
  });

  console.log("Component rendering, user: ", user);

  const updateName = () => {
    setUser({
      ...user,
      name: "Clark Kent",
    });
  };

  const updateAge = () => {
    setUser({
      ...user,
      age: user.age + 1,
    });
  };

  const updateMultiple = () => {
    setUser({
      ...user,
      name: "Clark Kent",
      age: user.age + 1,
    });
  };

  const updateCity = () => {
    setUser({
      ...user,
      address: {
        ...user.address,
        city: "Metropolis",
      },
    });
  };

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
      <p>Country: {user.address.country}</p>
      <button onClick={updateName}>Change name to Clark Kent</button>
      <button onClick={updateAge}>Increase age by 1</button>
      <button onClick={updateMultiple}>Update name and age</button>
      <button onClick={updateCity}>Move to Metropolis</button>
    </div>
  );
};
