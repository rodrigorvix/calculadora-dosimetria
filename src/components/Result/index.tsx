import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalStorage"
import { ResultStyle } from "./styles"

export const Result = () => {
  
const effective = {
  0	:penaltyTypificationOne,
  1	:penaltyTypificationOne,
  2	:penaltyTypificationOne,
  3	:penaltyTypificationOne,
  4	:penaltyTypificationOne,
  5	:penaltyTypificationOne,
  6	:penaltyTypificationOne,
  7	:penaltyTypificationOne,
  8	:penaltyTypificationOne,
  9	:penaltyTypificationOne,
  10:penaltyTypificationOne,
  11:penaltyTypificationOne,
  12:penaltyTypificationOne,
  13:penaltyTypificationOne,
  14:penaltyTypificationOne,
  15:penaltyTypificationOne,
  16:penaltyTypificationOne,
  17:penaltyTypificationTwo,
  18:penaltyTypificationTwo,
  19:penaltyTypificationTwo,
  20:penaltyTypificationTwo,
  21:penaltyTypificationTwo,
  22:penaltyTypificationTwo,
  23:penaltyTypificationTwo,
  24:penaltyTypificationTwo,
  25:penaltyTypificationTwo,
  26:penaltyTypificationTwo,
  27:penaltyTypificationTwo,
  28:penaltyTypificationTwo,
  29:penaltyTypificationTwo,
  30:penaltyTypificationTwo,
  31:penaltyTypificationTwo,
  32:penaltyTypificationThree,
  33:penaltyTypificationThree,
  34:penaltyTypificationThree,
  35:penaltyTypificationThree,
  36:penaltyTypificationThree,
  37:penaltyTypificationThree,
  38:penaltyTypificationThree,
  39:penaltyTypificationThree,
  40:penaltyTypificationThree,
  41:penaltyTypificationThree,
  42:penaltyTypificationThree,
  43:penaltyTypificationThree,
  44:penaltyTypificationThree,
  45:penaltyTypificationThree,
  46:penaltyTypificationThree,
  47:penaltyTypificationThree,
  48:penaltyTypificationThree,
  49:penaltyTypificationThree,
  50:penaltyTypificationThree,
  51:penaltyTypificationThree,
  52:penaltyTypificationThree,
  53:penaltyTypificationFour,
  54:penaltyTypificationFour,
  55:penaltyTypificationFour,
  56:penaltyTypificationFour,
  57:penaltyTypificationFour,
  58:penaltyTypificationFour,
  59:penaltyTypificationFour,
}
const commissioned = {
  0	:penaltyTypificationFive,
  1	:penaltyTypificationFive,
  2	:penaltyTypificationFive,
  3	:penaltyTypificationFive,
  4	:penaltyTypificationFive,
  5	:penaltyTypificationFive,
  6	:penaltyTypificationFive,
  7	:penaltyTypificationFive,
  8	:penaltyTypificationFive,
  9	:penaltyTypificationFive,
  10:penaltyTypificationFive,
  11:penaltyTypificationFive,
  12:penaltyTypificationFive,
  13:penaltyTypificationFive,
  14:penaltyTypificationOne,
  15:penaltyTypificationOne,
  16:penaltyTypificationOne,
  17:penaltyTypificationFive,
  18:penaltyTypificationFive,
  19:penaltyTypificationFive,
  20:penaltyTypificationFive,
  21:penaltyTypificationFive,
  22:penaltyTypificationFive,
  23:penaltyTypificationFive,
  24:penaltyTypificationFive,
  25:penaltyTypificationFive,
  26:penaltyTypificationFive,
  27:penaltyTypificationFive,
  28:penaltyTypificationFive,
  29:penaltyTypificationFive,
  30:penaltyTypificationFive,
  31:penaltyTypificationFive,
  32:penaltyTypificationFive,
  33:penaltyTypificationFive,
  34:penaltyTypificationFive,
  35:penaltyTypificationFive,
  36:penaltyTypificationFive,
  37:penaltyTypificationFive,
  38:penaltyTypificationFive,
  39:penaltyTypificationFive,
  40:penaltyTypificationFive,
  41:penaltyTypificationFive,
  42:penaltyTypificationFive,
  43:penaltyTypificationFive,
  44:penaltyTypificationFive,
  45:penaltyTypificationFive,
  46:penaltyTypificationFive,
  47:penaltyTypificationFive,
  48:penaltyTypificationFive,
  49:penaltyTypificationFive,
  50:penaltyTypificationFive,
  51:penaltyTypificationFive,
  52:penaltyTypificationFive,
  53:penaltyTypificationSix,
  54:penaltyTypificationSix,
  55:penaltyTypificationSix,
  56:penaltyTypificationSix,
  57:penaltyTypificationSix,
  58:penaltyTypificationSix,
  59:penaltyTypificationSix,
}

const effectiveCommissioned = {
  0	:penaltyTypificationSeven,
  1	:penaltyTypificationSeven,
  2	:penaltyTypificationSeven,
  3	:penaltyTypificationSeven,
  4	:penaltyTypificationSeven,
  5	:penaltyTypificationSeven,
  6	:penaltyTypificationSeven,
  7	:penaltyTypificationSeven,
  8	:penaltyTypificationSeven,
  9	:penaltyTypificationSeven,
  10:penaltyTypificationSeven,
  11:penaltyTypificationSeven,
  12:penaltyTypificationSeven,
  13:penaltyTypificationSeven,
  14:penaltyTypificationOne,
  15:penaltyTypificationOne,
  16:penaltyTypificationOne,
  17:penaltyTypificationSeven,
  18:penaltyTypificationSeven,
  19:penaltyTypificationSeven,
  20:penaltyTypificationSeven,
  21:penaltyTypificationSeven,
  22:penaltyTypificationSeven,
  23:penaltyTypificationSeven,
  24:penaltyTypificationSeven,
  25:penaltyTypificationSeven,
  26:penaltyTypificationSeven,
  27:penaltyTypificationSeven,
  28:penaltyTypificationSeven,
  29:penaltyTypificationSeven,
  30:penaltyTypificationSeven,
  31:penaltyTypificationSeven,
  32:penaltyTypificationEight,
  33:penaltyTypificationEight,
  34:penaltyTypificationEight,
  35:penaltyTypificationEight,
  36:penaltyTypificationEight,
  37:penaltyTypificationEight,
  38:penaltyTypificationEight,
  39:penaltyTypificationEight,
  40:penaltyTypificationEight,
  41:penaltyTypificationEight,
  42:penaltyTypificationEight,
  43:penaltyTypificationEight,
  44:penaltyTypificationEight,
  45:penaltyTypificationEight,
  46:penaltyTypificationEight,
  47:penaltyTypificationEight,
  48:penaltyTypificationEight,
  49:penaltyTypificationEight,
  50:penaltyTypificationEight,
  51:penaltyTypificationEight,
  52:penaltyTypificationEight,
  53:penaltyTypificationNine,
  54:penaltyTypificationNine,
  55:penaltyTypificationNine,
  56:penaltyTypificationNine,
  57:penaltyTypificationNine,
  58:penaltyTypificationNine,
  59:penaltyTypificationNine,
}

const contextResults = useContext(GlobalContext);
const resultSummationDegrees = contextResults.resultDegressPhaseOne + contextResults.resultDegressPhaseTwo
const recurrence = contextResults.recurrence;
const position = contextResults.positionSelected;

let resultTeste;

function penaltyTypificationOne () {
  if (resultSummationDegrees <= 30) {
    return recurrence ? 'SUSPENSÃO DE 1 DIA' : 'ADVERTÊNCIA';
  }
  const resultDaysPenalty = resultSummationDegrees > 120 ? 90 : resultSummationDegrees - 30;
  return `SUSPENSÃO DE ${ resultDaysPenalty } DIA(S). `
}

function penaltyTypificationTwo() {
  const result = resultSummationDegrees * 0.75; 

  return result > 90 ? 'DEMISSÃO' : `SUSPENSÃO DE ${Math.floor(result)} DIA(S).`;
}

function penaltyTypificationThree() {
  return 'DEMISSÃO';
}

function penaltyTypificationFour() {
  if(resultSummationDegrees <= 30) {
    return 'ADVERTÊNCIA';
  }
  const resultDaysPenalty = resultSummationDegrees - 30;
  return resultSummationDegrees > 90 ? 'DEMISSÃO' : `SUSPENSÃO DE ${resultDaysPenalty} DIA(S).` 
}

function penaltyTypificationFive() {
  return 'DESTITUIÇÃO DO CARGO EM COMISSÃO';
}
function penaltyTypificationSix() {
  if(resultSummationDegrees <= 30) {
    return 'ADVERTÊNCIA';
  }
  const resultDaysPenalty = resultSummationDegrees - 30;
  return resultSummationDegrees > 90 ? 'DESTITUIÇÃO DE CARGO EM COMISSÃO' : `SUSPENSÃO DE ${resultDaysPenalty} DIA(S).` 
}

function penaltyTypificationSeven() {
  const result = resultSummationDegrees * 0.75; 

  return result > 90 ? 'DEMISSÃO E DESTITUIÇÃO DO CARGO EM CONFIANÇA' : `SUSPENSÃO DE ${Math.floor(result)} DIA(S) E DESTITUIÇÃO DO CARGO EM CONFIANÇA.`;
}

function penaltyTypificationEight() {
  return 'DEMISSÃO E DESTITUIÇÃO DO CARGO EM CONFIANÇA';
}
function penaltyTypificationNine() {
  if(resultSummationDegrees <= 30) {
    return 'ADVERTÊNCIA';
  }
  const resultDaysPenalty = resultSummationDegrees - 30;
  return resultSummationDegrees > 90 ? 'DEMISSÃO E DESTITUIÇÃO DO CARGO EM CONFIANÇA' : `SUSPENSÃO DE ${resultDaysPenalty} DIA(S).` 
}

if (position === 'effective'){
  resultTeste =  effective[1]();
} else if (position === 'commissioned') {
  resultTeste = commissioned[1]();
}else if(position === 'effective-commissioned'){
  resultTeste = effectiveCommissioned[1]();
}else {
  resultTeste = '';
}


  return <ResultStyle>{resultTeste}</ResultStyle>
}