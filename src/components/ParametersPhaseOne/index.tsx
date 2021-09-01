import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalStorage";

import { CircleQualifier } from "../CircleQualifier";
import { IconTrash } from "../IconTrash";
import { InputDegrees } from "../InputDegrees";
import { InputRange } from "../InputRange";

import { ParametersPhaseOneStyle } from "./styles";

export const ParametersPhaseOne = () => {

  const [inputQuality, setInputQuality] = useState(1);
  const [inputGravity,setInputGravity] =useState(1);
  const [inputDamage, setInputDamage] = useState(0);
  const [inputGoodAntecedent, setInputGoodAntecedent] = useState(0);
  const [inputBadAntecedent, setInputBadAntecedent] = useState(0);

  const contextResults = useContext(GlobalContext);

  const summationDegrees = +inputQuality + +inputGravity + +inputDamage + Number(-inputGoodAntecedent) + +inputBadAntecedent ; 

  useEffect(() => {
    contextResults.setResultDegressPhaseOne(summationDegrees); 
  },[contextResults, summationDegrees]);
  
  const QualifierQuality = () => {
    let qualifier = {text:'', color:''}

    if(inputQuality <= 10) {
      qualifier.text = 'Culpa leve'
      qualifier.color = 'gray'
    }
    if(inputQuality > 10 && inputQuality <= 20) {
      qualifier.text = 'Culpa grave'
      qualifier.color = 'darkgoldenrod'
    }
    if(inputQuality > 20 && inputQuality <= 30) {
      qualifier.text = 'Dolo'
      qualifier.color = 'darkred'
    }
    return (
      <>
        <CircleQualifier color={qualifier.color}/>
        <span>{qualifier.text}</span>
      </>
    );
  }

  const QualifierGravity = () => {
    let qualifier = {text:'', color:''}

    if(inputGravity <= 10) {
      qualifier.text = 'Baixa'
      qualifier.color = 'gray'
    }
    if(inputGravity > 10 && inputGravity <= 20) {
      qualifier.text = 'Média'
      qualifier.color = 'darkgoldenrod'
    }
    if(inputGravity > 20 && inputGravity <= 30) {
      qualifier.text = 'Alta'
      qualifier.color = 'darkred'
    }
    return (
      <>
        <CircleQualifier color={qualifier.color}/>
        <span>{qualifier.text}</span>
      </>
    );
  }
  
  const QualifierDamage = () => {
    let qualifier = {text:'', color:''}

    if(inputDamage <= 0) {
      qualifier.text = 'Inexistente';
      qualifier.color = 'gray';
    }

    if(inputDamage > 0 && inputDamage <= 10) {
      qualifier.text = 'Leve';
      qualifier.color = 'gray';
    }
    if(inputDamage > 10 && inputDamage <= 20) {
      qualifier.text = 'Médio';
      qualifier.color = 'darkgoldenrod';
    }
    if(inputDamage > 20 && inputDamage <= 30) {
      qualifier.text = 'Grave';
      qualifier.color = 'darkred';
    }
    return (
      <>
        <CircleQualifier color={qualifier.color}/>
        <span>{qualifier.text}</span>
      </>
    );
  }

  function handleResetInput () {
    setInputQuality(1)
    setInputGravity(1)
    setInputDamage(0)
    setInputGoodAntecedent(0)
    setInputBadAntecedent(0)
  
  }

  return (
    <ParametersPhaseOneStyle>
      <h2>Parâmetros de Dosimetria - Fase 1</h2>
      <table>
        <thead>
          <tr>
            <th> 
              <div>
                <span><IconTrash clickReset={handleResetInput}/></span>
                <span>Critério</span>
              </div>
            </th>
            <th style={{width:'150px'}}>Qualificador</th>
            <th style={{width:'40%'}}></th>
            <th>Graus</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Natureza</td>
            <td>
            <QualifierQuality />   
            </td>
            <td>
              <InputRange max={30} min={1} value={inputQuality} updateValue={setInputQuality}/>
              
            </td>
            <td>
              <InputDegrees max={30} min={1} value={inputQuality} updateValue={setInputQuality}/>
            </td>
          </tr>
          <tr>
            <td>Gravidade</td>
            <td>
            <QualifierGravity />
            </td>
            <td>
              <InputRange max={30} min={1} value={inputGravity} updateValue={setInputGravity}/>
            </td>
            <td>
              <InputDegrees max={30} min={1} value={inputGravity} updateValue={setInputGravity}/>
            </td>
          </tr>
          <tr>
            <td>Dano</td>
            <td>
            <QualifierDamage />
            </td>
            <td>
            <InputRange max={30} min={0} value={inputDamage} updateValue={setInputDamage}/>
            </td>
            <td>
             <InputDegrees max={30} min={0} value={inputDamage} updateValue={setInputDamage}/>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>Bons Antecedentes</td>
            <td>
            <InputRange max={30} min={0} value={inputGoodAntecedent} updateValue={setInputGoodAntecedent} />
            </td>
            <td>
             <InputDegrees max={30} min={0} value={inputGoodAntecedent} updateValue={setInputGoodAntecedent}/>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>Maus Antecedentes</td>
            <td>
            <InputRange max={30} min={0} value={inputBadAntecedent} updateValue={setInputBadAntecedent} />
            </td>
            <td>
             <InputDegrees max={30} min={0} value={inputBadAntecedent} updateValue={setInputBadAntecedent}/>
            </td>
          </tr>
        </tbody>
      </table>
    </ParametersPhaseOneStyle>
  );
}