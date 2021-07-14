import { InputDegreesStyle } from "./styles";

export const InputDegrees = (props:any) => {
  return   <InputDegreesStyle type="number" max={props.max} min='0'value={props.value} onChange={e => props.updateValue(e.target.value)} />;

}