import "./App.css";
import { Header } from "./Header";
import { useState } from "react";
import { UserContextProvider } from "./UserContextProvider";
import { StopWatch } from "./StopWatch";
import { FocusInput } from "./FocusInput";

function App() {
  return (
    <FocusInput />
    // <StopWatch />
    // <UserContextProvider>
    //   <div>
    //     <h1>Dashboard</h1>
    //     <Header />
    //   </div>
    // </UserContextProvider>
  );
}

export default App;
