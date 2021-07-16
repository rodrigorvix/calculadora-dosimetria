import { createContext, useState } from "react";

interface ResultContext {
  resultDegressPhaseOne:any,
  setResultDegressPhaseOne:(e:any) => void,
  resultDegressPhaseTwo:any,
  setResultDegressPhaseTwo: (e:any) => void
}

export const GlobalContext = createContext({} as ResultContext);

export const GlobalStorage = (props:any) => {
  const [resultDegressPhaseOne, setResultDegressPhaseOne] = useState(0);
  const [resultDegressPhaseTwo, setResultDegressPhaseTwo] = useState(0);

  return (
    <GlobalContext.Provider value={{resultDegressPhaseOne,setResultDegressPhaseOne,resultDegressPhaseTwo,setResultDegressPhaseTwo}}>
      {props.children}
    </GlobalContext.Provider>
  );
}