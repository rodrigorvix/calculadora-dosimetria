import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalStorage";
import { PositionStyle } from "./styles";

export const Position = () => {
  const contextResults = useContext(GlobalContext);

  function handleChangePosition(event: React.ChangeEvent<HTMLInputElement>) {
    contextResults.setPositionSelected(event.target.id)
  }
  
  return (
    <PositionStyle>
      <div>
        <input type="radio" name="position" id="effective" onChange={handleChangePosition}/>
        <label htmlFor="effective">Efetivo</label>
      </div>
      <div>
        <input type="radio" name="position" id="commissioned" onChange={handleChangePosition}/>
        <label htmlFor="commissioned">Comissionado</label>
      </div>
      <div>
        <input type="radio" name="position" id="effective-commissioned" onChange={handleChangePosition}/>
        <label htmlFor="effective-commissioned">Ocupando cargo em comissão</label>
      </div>
    </PositionStyle>
  );
}