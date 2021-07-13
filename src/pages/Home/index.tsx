import { Typification } from "../../components/ Typification";
import { Position } from "../../components/Position";
import { Title } from "../../components/Title";

export const Home = () => {
  return (
    <>
    <Title />
    <Typification/>
    <Position/>
    <section>
      <h2>Parametros de Dosimetria(aumentam o grau da infração)</h2>
      <table>
        <thead>
          <tr>
            <th>TT</th>
            <th>Critério</th>
            <th>Qualificador</th>
            <th>Graus</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Natureza</td>
            <td>
              <div></div>
              <span>Culpa Leve</span>
            </td>
            <td>
              <input type="range"/>
            </td>
            <td>
              <input type="number" />
            </td>
          </tr>
          <tr>
            <td>Gravidade</td>
            <td>
              <div></div>
              <span>Baixa</span>
            </td>
            <td>
              <input type="range"/>
            </td>
            <td>
              <input type="number" />
            </td>
          </tr>
          <tr>
            <td>Dano</td>
            <td>
              <div></div>
              <span>Leve</span>
            </td>
            <td>
              <input type="range"/>
            </td>
            <td>
              <input type="number" />
            </td>
          </tr>
        </tbody>
      </table>

    </section>
    </>
  );
}