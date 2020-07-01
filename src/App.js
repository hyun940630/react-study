import React, { useState } from "react";

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

  return (
    <div>
      <input type="text" onChange={changeInput} />
      <button onClick={insert}>문자열 추가</button>
      {sum(stringList)}
    </div>
  );
}

export default App;
