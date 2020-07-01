import React, { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("init value1");

  // useEffect : 해당 컴포넌트가 실행 될 때마다 useEffect 함수가 실행됩니다.
  useEffect(() => {
    console.log("state111111가 변경될 때 마다 호출!!");
  });

  const changeInput = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <p>{text}</p>
      <input onChange={changeInput} />
    </div>
  );
}

export default App;
