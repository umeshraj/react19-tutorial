import "./App.css";
import { Header } from "./Header";
import { useState } from "react";
import { UserContextProvider } from "./UserContextProvider";
import { StopWatch } from "./StopWatch";

function App() {
  return (
    <StopWatch />
    // <UserContextProvider>
    //   <div>
    //     <h1>Dashboard</h1>
    //     <Header />
    //   </div>
    // </UserContextProvider>
  );
}

export default App;
