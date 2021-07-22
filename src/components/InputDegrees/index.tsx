import { InputHTMLAttributes } from "react";
import { InputDegreesStyle } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  max: number,
  value: number,
  updateValue : any
  }

export const InputDegrees = (props:InputProps) => {
  
  // function handleInput(e: any) {

  //   if(+e.target.value > +props.max){
  //     props.updateValue(props.max)
  //   }else if (+e.target.value < +e.target.min) {
  //     props.updateValue(e.target.min)
  //   }else {
  //     props.updateValue(e.target.value)
  //   }
  // }
  
  return   <InputDegreesStyle type="number" readOnly max={props.max} min='0'value={props.value} onChange={e => props.updateValue(e.target.value)}/>;

}