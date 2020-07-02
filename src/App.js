import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return action.value;
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, "initial state");

  const changeInput = (e) => {
    dispatch({ value: e.target.value, type: "CHANGE" });
  };

  return (
    <div>
      <h3>{state}</h3>
      <input type="text" value={state} onChange={changeInput} />
    </div>
  );
}

export default App;
