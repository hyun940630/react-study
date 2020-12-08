import React, { createContext } from "react";

import ChildrenWrapper from "./ChildrenWrapper";

export const CareerContext = createContext();

const CareerWrapper = () => {
  const career = {
    isWorking: true,
    company: "SUCCESS MODE",
  };

  return (
    <CareerContext.Provider value={career}>
      <ChildrenWrapper />
    </CareerContext.Provider>
  );
};

export default CareerWrapper;
