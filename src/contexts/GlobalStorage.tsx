import { createContext, useState } from "react";

interface Teste {
  resultParameter1:any,
  setResultParameters1:(e:any) => void,
  resultParameter:any,
  setResultParameters: (e:any) => void
}

export const GlobalContext = createContext({} as Teste);

export const GlobalStorage = (props:any) => {
  const [resultParameter1, setResultParameters1] = useState(0);
  const [resultParameter, setResultParameters] = useState(0);

  return (
    <GlobalContext.Provider value={{resultParameter1,setResultParameters1,resultParameter,setResultParameters}}>
      {props.children}
    </GlobalContext.Provider>
  );
}