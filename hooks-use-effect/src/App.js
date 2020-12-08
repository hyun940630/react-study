import React, { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("init value1");

  // useEffect 함수로 컴포넌트의 마지막 unmount에서만 실행하기
  // 두번째 매개변수에 빈배열([])을 부여합니다.
  useEffect(() => {
    console.log("state가 변경될 때만 호출!!");
    return () => {
      console.log("언마운트 시 호출!");
    };
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
