import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalStorage";
import { InputDegrees } from "../InputDegrees";
import { InputRange } from "../InputRange";

import { ParametersPhaseTwoStyle } from "./styles";


export const ParametersPhaseTwo = () => {
  const [inputAggravating, setInputAggravating] = useState(0);
  const [inputMitigating, setInputMitigating] = useState(0);
  

  const contextResults = useContext(GlobalContext);

  const summationDegreesPhaseTwo = +inputAggravating + +inputMitigating;

  const recurrence = contextResults.recurrence;
  
  useEffect(() => {
    contextResults.setResultDegressPhaseTwo(summationDegreesPhaseTwo);
  },[summationDegreesPhaseTwo,contextResults])
  
  function handleRecurrence(event:any) {
    event.target.checked ? contextResults.setRecurrence(true) : contextResults.setRecurrence(false)
  }
  

  return (
    <ParametersPhaseTwoStyle>
      <h2>Parâmetros de Dosimetria - Fase 2</h2>
      <table>
        <thead>
          <tr>
            <th>Critério</th>
            <th style={{width:'60%'}}></th>
            <th>Graus</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>Agravantes</td>
            <td>
              <InputRange max={6} value={inputAggravating} updateValue={setInputAggravating} />
            </td>
            <td>
              <InputDegrees max={6} value={inputAggravating} updateValue={setInputAggravating}/>
            </td>
          </tr>
          <tr>
            <td>Atenuantes</td>
            <td>
              <InputRange max={6} value={inputMitigating} updateValue={setInputMitigating}/>
            </td>
            <td>
              <InputDegrees max={6} value={inputMitigating} updateValue={setInputMitigating}/>
            </td>
          </tr>
          <tr>
            <td colSpan={2} style={{textAlign:'right', height:'60px'}}>Somatorio de graus:</td>
            <td>{contextResults.resultDegressPhaseOne + contextResults.resultDegressPhaseTwo}</td>
          </tr>
          <tr>
            <td colSpan={2} style={{textAlign:'right',height:'60px'}}>Reincidência?</td>
            <td>
              <input type="checkbox" checked={recurrence} onChange={handleRecurrence}/>
            </td>
          </tr>
         
        </tbody>
      </table>
    </ParametersPhaseTwoStyle>
  );
}