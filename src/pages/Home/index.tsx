import { Typification } from "../../components/ Typification";
import { ParametersIncrease } from "../../components/ParametersIncrease";
import { ParametersReduce } from "../../components/ParametersReduce";
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
      <ParametersIncrease />
      <ParametersReduce/>
    </Parameters>
    <Result />
    </>
  );
}