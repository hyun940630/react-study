import React, { useState } from "react";

const App = () => {
  // useState 선언
  const [text, setText] = useState("initial value");

  const changeText = (e) => {
    // setText()를 통해 text(state)를 업데이트
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

/*
  useState의 선언은 
  > const [state, setState] = useState("init value");
  
  <input />에 text가 입력되는 즉시 <p> 태그 안의 {text}가 업데이트됩니다.
*/