import { PositionStyle } from "./styles";

export const Position = () => {
  return (
    <PositionStyle>
      <div>
        <input type="radio" name="teste" id="effective"/>
        <label htmlFor="effective">Efetivo</label>
      </div>
      <div>
        <input type="radio" name="teste" id="commissioned" />
        <label htmlFor="commissioned">Comissionado</label>
      </div>
      <div>
        <input type="radio" name="teste" id="effective-commissioned"/>
        <label htmlFor="effective-commissioned">Ocupando cargo em comissão</label>
      </div>
    </PositionStyle>
  );
}