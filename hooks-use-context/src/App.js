import React, { createContext } from "react";

import CareerWrapper from "./CareerWrapper";

// Context 생성
export const UserContext = createContext();

function App() {
  const user = {
    name: "Hwang Hyun",
    age: 27,
  };

  return (
    <UserContext.Provider value={user}>
      <CareerWrapper />
    </UserContext.Provider>
  );
}

export default App;
