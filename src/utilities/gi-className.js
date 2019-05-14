import React, { createContext, useContext } from "react";

const Context = createContext();

export function GIClassNameProvider({ generateClassName, children }) {
  return <Context.Provider value={generateClassName} children={children} />;
}

export function useGIClassName(){
  return useContext(Context)
}
