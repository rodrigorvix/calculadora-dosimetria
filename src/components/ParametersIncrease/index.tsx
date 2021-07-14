import { useState } from "react";
import { CircleQualifier } from "../CircleQualifier";
import { InputDegrees } from "../InputDegrees";
import { InputRange } from "../InputRange";
import { ParametersIncreaseStyle } from "./styles";

export const ParametersIncrease = () => {

  const [inputQuality, setInputQuality] = useState(0);
  const [inputGravity,setInputGravity] =useState(0);
  const [inputDamage, setInputDamage] = useState(0);
  const [inputAntecedent, setInputAntecedent] = useState(0);


  return (
    <ParametersIncreaseStyle>
      <h2>Parametros de Dosimetria (aumentam o grau da infração)</h2>
      <table>
        <thead>
          <tr>
            <th>Critério</th>
            <th>Qualificador</th>
            <th style={{width:'40%'}}></th>
            <th>Graus</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Natureza</td>
            <td>
                <CircleQualifier/>
                <span>Culpa Leve</span>      
            </td>
            <td>
              <InputRange max={30} value={inputQuality} updateValue={setInputQuality}/>
              
            </td>
            <td>
              <InputDegrees max={30} value={inputQuality} updateValue={setInputQuality}/>
            </td>
          </tr>
          <tr>
            <td>Gravidade</td>
            <td>
              <CircleQualifier/>
              <span>Baixa</span>
            </td>
            <td>
              <InputRange max={30} value={inputGravity} updateValue={setInputGravity}/>
            </td>
            <td>
              <InputDegrees max={30} value={inputGravity} updateValue={setInputGravity}/>
            </td>
          </tr>
          <tr>
            <td>Dano</td>
            <td>
              <CircleQualifier/>
              <span>Leve</span>
            </td>
            <td>
            <InputRange max={30} value={inputDamage} updateValue={setInputDamage}/>
            </td>
            <td>
             <InputDegrees max={30} value={inputDamage} updateValue={setInputDamage}/>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>Bons Antecedentes</td>
            <td>
            <InputRange max={30} value={inputAntecedent} updateValue={setInputAntecedent} />
            </td>
            <td>
             <InputDegrees max={30} value={inputAntecedent} updateValue={setInputAntecedent}/>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>Maus Antecedentes</td>
            <td>
            <InputRange max={30} value={inputAntecedent} updateValue={setInputAntecedent} />
            </td>
            <td>
             <InputDegrees max={30} value={inputAntecedent} updateValue={setInputAntecedent}/>
            </td>
          </tr>
        </tbody>
      </table>
    </ParametersIncreaseStyle>
  );
}