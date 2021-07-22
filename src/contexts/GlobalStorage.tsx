import { createContext, ReactNode, useState } from "react";

interface ResultContext {
  resultDegressPhaseOne:number,
  setResultDegressPhaseOne:(result:number) => void,
  resultDegressPhaseTwo:number,
  setResultDegressPhaseTwo: (result:number) => void
  selectedTypifications: Array<any>,
  setSelectedTypifications: (typification:Array<any>) => void,
  positionSelected:string,
  setPositionSelected:(position:string) => void,
  recurrence: boolean,
  setRecurrence: (recurrence:boolean) => void
}

interface ContextPropsType {
  children:ReactNode
}

export const GlobalContext = createContext({} as ResultContext);

export const GlobalStorage = (props:ContextPropsType) => {
  const [resultDegressPhaseOne, setResultDegressPhaseOne] = useState(0);
  const [resultDegressPhaseTwo, setResultDegressPhaseTwo] = useState(0);
  const [selectedTypifications, setSelectedTypifications] = useState([] as any);
  const [positionSelected, setPositionSelected] = useState('');
  const [recurrence, setRecurrence] = useState(false);

  
  return (
    <GlobalContext.Provider value={{resultDegressPhaseOne,setResultDegressPhaseOne,resultDegressPhaseTwo,setResultDegressPhaseTwo,
      selectedTypifications, setSelectedTypifications, positionSelected, setPositionSelected,recurrence, setRecurrence}}>
      {props.children}
    </GlobalContext.Provider>
  );
}