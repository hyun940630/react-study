import React, { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("init value1");

  // useEffect의 두번째 매개변수를 [](빈배열)로 넘겨주게 되면
  // Class-type Component의 componentDidMount()와 같은 역할을 합니다.
  useEffect(() => {
    console.log("state가 변경될 때만 호출!!");
  }, []);

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
