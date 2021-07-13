import { PositionStyle } from "./styles";

export const Position = () => {
  return (
    <PositionStyle>
      <div>
        <input type="radio" name="teste" id="effective"/>
        <label htmlFor="effective">Servidor Efetivo</label>
      </div>
      <div>
        <input type="radio" name="teste" id="commissioned" />
        <label htmlFor="commissioned">Servidor Comissionando</label>
      </div>
      <div>
        <input type="radio" name="teste" id="effective-commissioned"/>
        <label htmlFor="effective-commissioned">Servidor ocupando cargo em comissão</label>
      </div>
    </PositionStyle>
  );
}