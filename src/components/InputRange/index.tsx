import { InputRangeStyle } from "./styles";

export const InputRange = (props:any) => {
  return <InputRangeStyle type="range" max={props.max} min='0' value={props.value} onChange={e => props.updateValue(e.target.value)}/>;
}