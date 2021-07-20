import { createContext, useState } from "react";

interface ResultContext {
  resultDegressPhaseOne:any,
  setResultDegressPhaseOne:(e:any) => void,
  resultDegressPhaseTwo:any,
  setResultDegressPhaseTwo: (e:any) => void
  selectedTypifications: any,
  setSelectedTypifications: any,
  positionSelected:any,
  setPositionSelected:any,
  recurrence: boolean,
  setRecurrence: any
}

export const GlobalContext = createContext({} as ResultContext);

export const GlobalStorage = (props:any) => {
  const [resultDegressPhaseOne, setResultDegressPhaseOne] = useState(0);
  const [resultDegressPhaseTwo, setResultDegressPhaseTwo] = useState(0);
  const [selectedTypifications, setSelectedTypifications] = useState([] as any);
  const [positionSelected, setPositionSelected] = useState(null);
  const [recurrence, setRecurrence] = useState(false);

  return (
    <GlobalContext.Provider value={{resultDegressPhaseOne,setResultDegressPhaseOne,resultDegressPhaseTwo,setResultDegressPhaseTwo,
      selectedTypifications, setSelectedTypifications, positionSelected, setPositionSelected,recurrence, setRecurrence}}>
      {props.children}
    </GlobalContext.Provider>
  );
}