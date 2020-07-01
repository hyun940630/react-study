import React, { createContext, useContext } from "react";

const TestContext1 = createContext();
const Testcontext2 = createContext();

const UseContextExample = () => {
  const name = useContext(TestContext1);
  const age = useContext(Testcontext2);
  return <div>{name + " " + age}</div>;
};

function App() {
  return (
    <TestContext1.Provider value="Hwang Hyun">
      <Testcontext2.Provider value="27">
        <UseContextExample />
      </Testcontext2.Provider>
    </TestContext1.Provider>
  );
}

export default App;
