import { ChangeEventHandler, InputHTMLAttributes } from "react"
import { CheckboxStyle } from "./styles"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  idTypification: number,
  selectedChange : ChangeEventHandler<HTMLInputElement>,
  
  }

export const Checkbox = (props:InputProps) => {
  return <CheckboxStyle type="checkbox" value={props.idTypification} onChange={props.selectedChange}/>
}