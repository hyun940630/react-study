import React, { useCallback, useMemo, useRef, useState } from "react";

function App() {
  const [string, setString] = useState("");
  const [stringList, setStringList] = useState([]);

  // useRef!!
  const inputText = useRef();

  const change = useCallback((e) => {
    setString(e.target.value);
  }, []);

  const insert = useCallback(() => {
    const newList = stringList.slice();
    newList.push(string);
    setStringList(newList);

    // focusing!!
    inputText.current.focus();
  }, [string, stringList]);

  const sum = useCallback((list) => {
    console.log("문자열 합치는 중!");
    let stringSum = "";
    for (let value of list) {
      stringSum += value + " ";
    }
    return stringSum;
  }, []);

  const result = useMemo(() => sum(stringList), [stringList, sum]);

  return (
    <div>
      <input type="text" ref={inputText} onChange={change} />
      <button onClick={insert}>문자열 추가</button>
      {result}
    </div>
  );
}

export default App;
