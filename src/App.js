import React, { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("init value1");

  // useEffect 함수 안에서 return을 해주면
  // Class-type Component의 componentWillUnmount()와 같은 역할을 합니다.
  useEffect(() => {
    console.log("state가 변경될 때만 호출!!");
    return () => {
      console.log("언마운트 시 호출!");
    };
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
