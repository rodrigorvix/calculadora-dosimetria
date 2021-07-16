import { Typification } from "../../components/ Typification";
import { ParametersPhaseOne } from "../../components/ParametersPhaseOne";
import { ParametersPhaseTwo } from "../../components/ParametersPhaseTwo";
import { Position } from "../../components/Position";
import { Result } from "../../components/Result";
import { Title } from "../../components/Title";
import { Parameters } from "../../styles/parameters";

export const Home = () => {
  return (
    <>
    <Title />
    <Typification/>
    <Position/>
    <Parameters>
      <ParametersPhaseOne />
      <ParametersPhaseTwo/>
    </Parameters>
    <Result />
    </>
  );
}