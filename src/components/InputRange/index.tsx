import { InputHTMLAttributes } from "react";
import { InputRangeStyle } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  max: number,
  value: number,
  updateValue : any
  }

export const InputRange = (props:InputProps) => {
  return <InputRangeStyle type="range" max={props.max} min='0' value={props.value} onChange={e => props.updateValue(e.target.value)}/>;
}