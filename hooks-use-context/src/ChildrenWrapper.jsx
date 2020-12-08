import React, { useContext } from "react";

import { CareerContext } from "./CareerWrapper";
import { UserContext } from "./App";

const ChildrenWrapper = () => {
  const user = useContext(UserContext);
  const career = useContext(CareerContext);

  return (
    <div>
      <div>NAME : {user.name}</div>
      <div>AGE : {user.age}</div>
      <div>{career.isWorking ? "He is working!" : "He is Not working!"}</div>
      <div>{career.company}</div>
    </div>
  );
};

export default ChildrenWrapper;
