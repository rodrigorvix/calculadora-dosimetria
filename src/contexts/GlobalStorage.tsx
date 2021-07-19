import { createContext, useState } from "react";

interface ResultContext {
  resultDegressPhaseOne:any,
  setResultDegressPhaseOne:(e:any) => void,
  resultDegressPhaseTwo:any,
  setResultDegressPhaseTwo: (e:any) => void
  selected: any,
  setSelected: any,
  positionSelected:any,
  setPositionSelected:any
}

export const GlobalContext = createContext({} as ResultContext);

export const GlobalStorage = (props:any) => {
  const [resultDegressPhaseOne, setResultDegressPhaseOne] = useState(0);
  const [resultDegressPhaseTwo, setResultDegressPhaseTwo] = useState(0);
  const [selected, setSelected] = useState([] as any);
  const [positionSelected, setPositionSelected] = useState(null);

  return (
    <GlobalContext.Provider value={{resultDegressPhaseOne,setResultDegressPhaseOne,resultDegressPhaseTwo,setResultDegressPhaseTwo,selected, setSelected, positionSelected, setPositionSelected}}>
      {props.children}
    </GlobalContext.Provider>
  );
}