import { useState } from "react";
import { CircleQualifier } from "../CircleQualifier";
import { InputDegrees } from "../InputDegrees";
import { InputRange } from "../InputRange";
import { ParametersIncreaseStyle } from "./styles";

export const ParametersIncrease = () => {

  const [inputQuality, setInputQuality] = useState(1);
  const [inputGravity,setInputGravity] =useState(0);
  const [inputDamage, setInputDamage] = useState(0);
  const [inputGoodAntecedent, setInputGoodAntecedent] = useState(0);
  const [inputBadAntecedent, setInputBadAntecedent] = useState(0);

  const QualityDescription = () => {
    let quality = {text:'', color:''}

    if(inputQuality <= 10) {
      quality.text = 'Culpa leve'
      quality.color = 'gray'
    }
    if(inputQuality > 10 && inputQuality <= 20) {
      quality.text = 'Culpa grave'
      quality.color = 'darkgoldenrod'
    }
    if(inputQuality > 20 && inputQuality <= 30) {
      quality.text = 'Dolo'
      quality.color = 'darkred'
    }
    return (
      <>
        <CircleQualifier color={quality.color}/>
        <span>{quality.text}</span>
      </>
    );
  }

  const QualityGravity = () => {
    let quality = {text:'', color:''}

    if(inputGravity <= 10) {
      quality.text = 'Baixa'
      quality.color = 'gray'
    }
    if(inputGravity > 10 && inputGravity <= 20) {
      quality.text = 'Média'
      quality.color = 'darkgoldenrod'
    }
    if(inputGravity > 20 && inputGravity <= 30) {
      quality.text = 'Alta'
      quality.color = 'darkred'
    }
    return (
      <>
        <CircleQualifier color={quality.color}/>
        <span>{quality.text}</span>
      </>
    );
  }
  
  const QualityDamage = () => {
    let quality = {text:'', color:''}

    if(inputDamage <= 10) {
      quality.text = 'Leve'
      quality.color = 'gray'
    }
    if(inputDamage > 10 && inputDamage <= 20) {
      quality.text = 'Médio'
      quality.color = 'darkgoldenrod'
    }
    if(inputDamage > 20 && inputDamage <= 30) {
      quality.text = 'Grave'
      quality.color = 'darkred'
    }
    return (
      <>
        <CircleQualifier color={quality.color}/>
        <span>{quality.text}</span>
      </>
    );
  }

  return (
    <ParametersIncreaseStyle>
      <h2>Parametros de Dosimetria (aumentam o grau da infração)</h2>
      <table>
        <thead>
          <tr>
            <th>Critério</th>
            <th style={{width:'150px'}}>Qualificador</th>
            <th style={{width:'40%'}}></th>
            <th>Graus</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Natureza</td>
            <td>
            <QualityDescription />   
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
            <QualityGravity />
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
            <QualityDamage />
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
            <InputRange max={30} value={inputGoodAntecedent} updateValue={setInputGoodAntecedent} />
            </td>
            <td>
             <InputDegrees max={30} value={inputGoodAntecedent} updateValue={setInputGoodAntecedent}/>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>Maus Antecedentes</td>
            <td>
            <InputRange max={30} value={inputBadAntecedent} updateValue={setInputBadAntecedent} />
            </td>
            <td>
             <InputDegrees max={30} value={inputBadAntecedent} updateValue={setInputBadAntecedent}/>
            </td>
          </tr>
        </tbody>
      </table>
    </ParametersIncreaseStyle>
  );
}