import React, { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("init value1");

  useEffect(() => {
    console.log("state가 변경될 때만 호출!!");
  }, [text]); // useEffect의 두번째 매개변수를 통해 해당 state만 감지하여 useEffect를 실행합니다.

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
