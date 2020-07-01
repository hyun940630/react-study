import React, { useMemo, useState } from "react";

function App() {
  const [string, setString] = useState("");
  const [stringList, setStringList] = useState([]);

  const changeInput = (e) => {
    setString(e.target.value);
  };

  const insert = () => {
    const newList = stringList.slice();
    newList.push(string);
    setStringList(newList);
  };

  const sum = (list) => {
    console.log("문자열 합치는 중!");
    let stringSum = "";
    for (let value of list) {
      stringSum += value + " ";
    }
    return stringSum;
  };

  // useMemo을 사용하여 stringList의 변화를 감지한 경우에만 sum()을 실행시켰다.
  // useMemo의 두번째 매개변수에 감자하고자 하는 state를 넣어주면 해당 값만을 감지하여 동작한다.
  const resultString = useMemo(() => sum(stringList), [stringList]);

  return (
    <div>
      <input type="text" onChange={changeInput} />
      <button onClick={insert}>문자열 추가</button>
      {resultString}
    </div>
  );
}

export default App;
