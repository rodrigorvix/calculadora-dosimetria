import { CircleQualifierStyle } from "./styles"

interface CircleQualifierType {
  color: string
}

export const CircleQualifier = (props:CircleQualifierType) => {
  return <CircleQualifierStyle style={{background:props.color}}></CircleQualifierStyle>
}