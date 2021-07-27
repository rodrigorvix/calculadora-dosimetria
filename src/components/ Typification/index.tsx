import { useState } from "react";
import { InputHTMLAttributes, useRef } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalStorage";

import { Checkbox } from "../Checkbox";
import { IconTrash } from "../IconTrash";

import { TypificationStyle } from "./styles";

interface TypificationType {
  id:number,
  description:string
}

export const Typification = () => {
  const typificationList = [
    {id:0, description: 'Lei Complementar nº 46/94, art. 220, I – ser assíduo e pontual ao serviço;'},
    {id:1, description: 'Lei Complementar nº 46/94, art. 220, II – guardar sigilo sobre assuntos da repartição;'},
    {id:2, description: 'Lei Complementar nº 46/94, art. 220, III – tratar com urbanidade os demais servidores públicos e o público em geral;'},
    {id:3, description:'Lei Complementar nº 46/94, art. 220, IV – ser leal às instituições constitucionais e administrativas a que servir;'},
    {id:4, description: 'Lei Complementar nº 46/94, art. 220, V – exercer com zelo e dedicação as atribuições do cargo ou função;'},
    {id:5, description:'Lei Complementar nº 46/94, art. 220, VI – observar as normas legais e regulamentares;'},
    {id:6, description: 'Lei Complementar nº 46/94, art. 220, VII – obedecer às ordens superiores, exceto quando manifestamente ilegais;'},
    {id:7, description: 'Lei Complementar nº 46/94, art. 220, VIII – levar ao conhecimento da autoridade as irregularidades de que tiver ciência em razão do cargo ou função;'},
    {id:8, description: 'Lei Complementar nº 46/94, art. 220, IX – zelar pela economia do material e conservação do patrimônio público;'},
    {id:9, description: 'Lei Complementar nº 46/94, art. 220, X – providenciar para que esteja sempre em ordem no assentamento individual, a sua declaração de família;'},
    {id:10, description: 'Lei Complementar nº 46/94, art. 220, XI – atender com presteza e correção;'},
    {id:11, description: 'Lei Complementar nº 46/94, art. 220, XII – manter conduta compatível com a moralidade pública;'},
    {id:12, description: 'Lei Complementar nº 46/94, art. 220, XIII – representar contra ilegalidade, omissão ou abuso de poder, de que tenha tomado conhecimento, indicando elementos de prova para efeito de apuração em processo apropriado;'},
    {id:13, description: 'Lei Complementar nº 46/94, art. 220, XIV – comunicar no prazo de quarenta e oito horas ao setor competente, a existência de qualquer valor indevidamente creditado em sua conta bancária;'},
    {id:14, description: 'Lei Complementar nº 46/94, art. 221, I – ausentar-se do serviço durante o expediente, sem prévia autorização do chefe imediato;'},
    {id:15, description: 'Lei Complementar nº 46/94, art. 221, II – recusar fé a documentos públicos;'},
    {id:16, description: 'Lei Complementar nº 46/94, art. 221, III – referir-se de modo depreciativo ou desrespeitoso a autoridades públicas ou a atos do poder público, ou outro, admitindo-se a crítica em trabalho assinado;'},
    {id:17, description: 'Lei Complementar nº 46/94, art. 221, IV – manter, sob sua chefia imediata, cônjuge, companheira ou parente até o segundo grau civil;'},  
    {id:18,description:	'Lei Complementar nº 46/94, art. 221, V – utilizar pessoal ou recursos materiais da repartição em serviços ou atividades particulares;'},
    {id:19,description:	'Lei Complementar nº 46/94, art. 221, VI – opor resistência injustificada ao andamento de documento e processo ou à realização de serviços;'},
    {id:20,description:	'Lei Complementar nº 46/94, art. 221, VII – retirar, sem prévia anuência da autoridade competente, qualquer documento ou objeto do local de trabalho;'},
    {id:21,description:	'Lei Complementar nº 46/94, art. 221, VIII – cometer a outro servidor público atribuições estranhas às do cargo que ocupa, exceto em situações de emergência e transitórias ou nas hipóteses previstas nesta Lei;'},
    {id:22,description:	'Lei Complementar nº 46/94, art. 221, IX – compelir ou aliciar outro servidor público a filiar-se a associação profissional ou sindical ou a partido político;'},
    {id:23,description:	'Lei Complementar nº 46/94, art. 221, X – cometer a pessoa estranha ao serviço, fora dos casos previstos em lei, o desempenho de encargo que lhe competir ou a seu subordinado;'},
    {id:24,description:	'Lei Complementar nº 46/94, art. 221, XI – atuar, como procurador ou intermediário, junto a órgãos públicos estaduais, salvo quando se tratar de benefícios previdenciários ou assistenciais e percepção de remuneração ou proventos de cônjuge, companheiro e parentes até terceiro grau civil;'},
    {id:25,description:	'Lei Complementar nº 46/94, art. 221, XII – fazer afirmação falsa, como testemunha ou perito, em processo administrativo-disciplinar;'},
    {id:26,description:	'Lei Complementar nº 46/94, art. 221, XIII – dar causa a sindicância ou processo administrativo-disciplinar, imputando a qualquer servidor público infração de que o sabe inocente;'},
    {id:27,description:	'Lei Complementar nº 46/94, art. 221, XIV – praticar o comércio de bens ou serviços, no local de trabalho, ainda que fora do horário normal do expediente'},
    {id:28,description:	'Lei Complementar nº 46/94, art. 221, XV – representar em contrato de obras, de serviços, de compra, de arrendamento e de alienação sem a devida realização do processo de licitação pública competente;'},
    {id:29,description:	'Lei Complementar nº 46/94, art. 221, XVI – praticar violência no exercício da função ou a pretexto de exercê-la;'},
    {id:30,description:	'Lei Complementar nº 46/94, art. 221, XVII – entrar no exercício de função pública antes de satisfeitas as exigências legais ou continuar a exercê-las sem autorização, depois de saber oficialmente que foi exonerado, removido, substituído ou suspenso;'},
    {id:31,description:	'Lei Complementar nº 46/94, art. 221, XVIII – solicitar ou receber propinas, presentes, empréstimos pessoais ou vantagens de qualquer espécie, para si ou para outrem, em razão do cargo;'},
    {id:32,description:	'Lei Complementar nº 46/94, art. 221, XIX – participar, na qualidade de proprietário, sócio ou administrador, de empresa fornecedora de bens e serviços, executora de obras ou que realize qualquer modalidade de contrato, de ajuste ou compromisso com o Estado;'},
    {id:33,description:	'Lei Complementar nº 46/94, art. 221, XX – praticar usura sob qualquer de suas formas;'},
    {id:34,description:	'Lei Complementar nº 46/94, art. 221, XXI – falsificar, extraviar, sonegar ou inutilizar livro oficial ou documento ou usá-los sabendo-os falsificados;'},
    {id:35,description:	'Lei Complementar nº 46/94, art. 221, XXII – retardar ou deixar de praticar indevidamente ato de ofício ou praticá-lo contra disposição expressa de lei, para satisfazer interesse ou sentimento pessoal;'},
    {id:36,description:	'Lei Complementar nº 46/94, art. 221, XXIII – dar causa, mediante ação ou omissão, ao não recolhimento, no todo ou em parte, de tributos, ou contribuições devidas ao Estado;'},
    {id:37,description:	'Lei Complementar nº 46/94, art. 221, XXIV – facilitar a prática de crime contra a Fazenda Pública Estadual;'},
    {id:38,description:	'Lei Complementar nº 46/94, art. 221, XXV – valer-se ou permitir dolosamente que terceiros tirem proveito de informação, prestígio ou influência obtidas em função do cargo, para lograr, direta ou indiretamente proveito pessoal ou de outrem, em detrimento da dignidade da função pública;'},
    {id:39,description:	'Lei Complementar nº 46/94, art. 221, XXVI – exercer quaisquer atividades incompatíveis com o exercício do cargo ou função, ou ainda, com o horário de trabalho;'},
    {id:40,description:	'Lei Complementar nº 46/94, art. 234, I – crime contra a administração pública;'},
    {id:41,description:	'Lei Complementar nº 46/94, art. 234, II – abandono de cargo;'},
    {id:42,description:	'Lei Complementar nº 46/94, art. 234, III – inassiduidade habitual;'},
    {id:43,description:	'Lei Complementar nº 46/94, art. 234, IV – improbidade administrativa;'},
    {id:44,description:	'Lei Complementar nº 46/94, art. 234, V – incontinência pública;'},
    {id:45,description:	'Lei Complementar nº 46/94, art. 234, VI – insubordinação grave em serviço;'},
    {id:46,description:	'Lei Complementar nº 46/94, art. 234, VII – ofensa física, em serviço, a servidor público ou a particular, salvo em legítima defesa, própria ou de outrem;'},
    {id:47,description:	'Lei Complementar nº 46/94, art. 234, VIII – aplicação irregular de dinheiros públicos;'},
    {id:48,description:	'Lei Complementar nº 46/94, art. 234, IX – procedimento desidioso, entendido como tal a falta ao dever de diligência no cumprimento de suas funções;'}, 
    {id:49,description:	'Lei Complementar nº 46/94, art. 234, X – revelação de segredo apropriado em razão do cargo;'},
    {id:50,description:	'Lei Complementar nº 46/94, art. 234, XI – lesão aos Cofres do Estado e dilapidação do patrimônio estadual;'},
    {id:51,description:	'Lei Complementar nº 46/94, art. 234, XII – corrupção;'},
    {id:52,description:	'Lei Complementar nº 46/94, art. 234, XIII – acumulação remunerada de cargos, empregos ou funções públicas, ressalvadas as hipóteses do permissivo constitucional;'},
    {id:53,description:	'Lei Estadual nº 9871/12, art. 23, I – recusar-se a fornecer informação requerida nos termos desta Lei, retardar deliberadamente o seu fornecimento ou fornecê-la intencionalmente de forma incorreta, incompleta ou imprecisa;'},
    {id:54,description:	'Lei Estadual nº 9871/12, art. 23, II – utilizar indevidamente, bem como subtrair, destruir, inutilizar, desfigurar, alterar ou ocultar, total ou parcialmente, informação que se encontre sob sua guarda ou a que tenha acesso ou conhecimento em razão do exercício das atribuições de cargo, emprego ou função pública;'},
    {id:55,description:	'Lei Estadual nº 9871/12, art. 23, III – agir com dolo ou má-fé na análise das solicitações de acesso à informação;'},
    {id:56,description:	'Lei Estadual nº 9871/12, art. 23, IV – divulgar ou permitir a divulgação ou acessar ou permitir acesso indevido à informação sigilosa ou informação pessoal;'},
    {id:57,description:	'Lei Estadual nº 9871/12, art. 23, V – impor sigilo à informação para obter proveito pessoal ou de terceiro, ou para fins de ocultação de ato ilegal cometido por si ou por outrem;'},
    {id:58,description:	'Lei Estadual nº 9871/12, art. 23, VI – ocultar da revisão de autoridade superior competente informação sigilosa para beneficiar a si ou a outrem, ou em prejuízo de terceiros;'},
    {id:59,description:	'Lei Estadual nº 9871/12, art. 23, VII – destruir ou subtrair, por qualquer meio, documento concernente a possível violação de direitos humanos por parte de agentes do Estado.'},
  ]

  const contextSelected = useContext(GlobalContext);

  const [listTypificationPrint, setListTypificationPrint] = useState([] as any);

  const inputsTypification: any = useRef([]);

  function handleChange (event: React.ChangeEvent<HTMLInputElement>) {
    if(event.target.checked) { 
      contextSelected.setSelectedTypifications([...contextSelected.selectedTypifications, event.target.value]);
      
      setListTypificationPrint([...listTypificationPrint, typificationList[+event.target.value]])
      
    }else {
      contextSelected.setSelectedTypifications(contextSelected.selectedTypifications.filter((selected : string) => selected !== event.target.value))
    
      setListTypificationPrint(listTypificationPrint.filter((selected:TypificationType) => selected.id !== +event.target.value))
    }
  }

  function handleResetSelected() {
    for(let i = 0 ; i < 60; i++) {
      if(inputsTypification.current[i].checked) {
        inputsTypification.current[i].checked = false
      }
    }
    contextSelected.setSelectedTypifications([])

    setListTypificationPrint([])
  }
  return (
    <TypificationStyle>
      <table>
        <thead>
          <tr>
            <th><IconTrash clickReset={handleResetSelected}/></th>
            <th>
              Tipificações ({contextSelected.selectedTypifications.length} selecionadas)
            </th>
          </tr>
        </thead>
        <tbody>
         {typificationList.map(typification => {
           const getRef = (element:InputHTMLAttributes<HTMLInputElement>) => inputsTypification.current.push(element) 
           return (
            <tr key={typification.id}>
              <td><Checkbox idTypification={typification.id} selectedChange={handleChange} reference={getRef}/></td>
              
              <td>{typification.description}</td>
            </tr>
           );
         })}
        </tbody>
      </table>

      <div>
        <h3>Tipificações aplicadas</h3>
        <ul>
          {listTypificationPrint.map((typification:TypificationType) => {
            return (
              <li key={typification.id}>{typification.description}</li>
            );
          })}
        </ul>
      </div>
     
    </TypificationStyle>

  );
}