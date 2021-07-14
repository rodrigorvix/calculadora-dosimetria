import { useState } from "react";
import { InputDegrees } from "../InputDegrees";
import { InputRange } from "../InputRange";
import { ParametersReduceStyle } from "./styles";


export const ParametersReduce = () => {
  const [inputAggravating, setInputAggravating] = useState(0);
  const [inputMitigating, setInputMitigating] = useState(0);
  
  const result = +inputAggravating + +inputMitigating;

  return (
    <ParametersReduceStyle>
      <h2>Parametros de Dosimetria (diminuem o grau da infração)</h2>
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
            <td>{result}</td>
          </tr>
          <tr>
            <td colSpan={2} style={{textAlign:'right',height:'60px'}}>Reincidência?</td>
            <td>
              <input type="checkbox"/>
            </td>
          </tr>
         
        </tbody>
      </table>
    </ParametersReduceStyle>
  );
}