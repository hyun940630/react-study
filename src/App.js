import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState("initial value");

  const changeText = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <p>{text}</p>
      <input onChange={changeText} />
    </div>
  );
};

export default App;
