
import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalStorage"
import { ResultStyle } from "./styles"

interface ResultTypification {
  result: string,
  weight: number,
  days?: number
}
interface PositionType {
  0: () => ResultTypification;
  1: () => ResultTypification;
  2: () => ResultTypification;
  3: () => ResultTypification;
  4: () => ResultTypification;
  5: () => ResultTypification;
  6: () => ResultTypification;
  7: () => ResultTypification;
  8: () => ResultTypification;
  9: () => ResultTypification;
  10: () => ResultTypification;
  11: () => ResultTypification;
  12: () => ResultTypification;
  13: () => ResultTypification;
  14: () => ResultTypification;
  15: () => ResultTypification;
  16: () => ResultTypification;
  17: () => ResultTypification;
  18: () => ResultTypification;
  19: () => ResultTypification;
  20: () => ResultTypification;
  21: () => ResultTypification;
  22: () => ResultTypification;
  23: () => ResultTypification;
  24: () => ResultTypification;
  25: () => ResultTypification;
  26: () => ResultTypification;
  27: () => ResultTypification;
  28: () => ResultTypification;
  29: () => ResultTypification;
  30: () => ResultTypification;
  31: () => ResultTypification;
  32: () => ResultTypification;
  33: () => ResultTypification;
  34: () => ResultTypification;
  35: () => ResultTypification;
  36: () => ResultTypification;
  37: () => ResultTypification;
  38: () => ResultTypification;
  39: () => ResultTypification;
  40: () => ResultTypification;
  41: () => ResultTypification;
  42: () => ResultTypification;
  43: () => ResultTypification;
  44: () => ResultTypification;
  45: () => ResultTypification;
  46: () => ResultTypification;
  47: () => ResultTypification;
  48: () => ResultTypification;
  49: () => ResultTypification;
  50: () => ResultTypification;
  51: () => ResultTypification;
  52: () => ResultTypification;
  53: () => ResultTypification;
  54: () => ResultTypification;
  55: () => ResultTypification;
  56: () => ResultTypification;
  57: () => ResultTypification;
  58: () => ResultTypification;
  59: () => ResultTypification;
}

export const Result = () => {

  const effective: PositionType = {
    0: penaltyTypificationOne,
    1: penaltyTypificationOne,
    2: penaltyTypificationOne,
    3: penaltyTypificationOne,
    4: penaltyTypificationOne,
    5: penaltyTypificationOne,
    6: penaltyTypificationOne,
    7: penaltyTypificationOne,
    8: penaltyTypificationOne,
    9: penaltyTypificationOne,
    10: penaltyTypificationOne,
    11: penaltyTypificationOne,
    12: penaltyTypificationOne,
    13: penaltyTypificationOne,
    14: penaltyTypificationOne,
    15: penaltyTypificationOne,
    16: penaltyTypificationOne,
    17: penaltyTypificationTwo,
    18: penaltyTypificationTwo,
    19: penaltyTypificationTwo,
    20: penaltyTypificationTwo,
    21: penaltyTypificationTwo,
    22: penaltyTypificationTwo,
    23: penaltyTypificationTwo,
    24: penaltyTypificationTwo,
    25: penaltyTypificationTwo,
    26: penaltyTypificationTwo,
    27: penaltyTypificationTwo,
    28: penaltyTypificationTwo,
    29: penaltyTypificationTwo,
    30: penaltyTypificationTwo,
    31: penaltyTypificationTwo,
    32: penaltyTypificationThree,
    33: penaltyTypificationThree,
    34: penaltyTypificationThree,
    35: penaltyTypificationThree,
    36: penaltyTypificationThree,
    37: penaltyTypificationThree,
    38: penaltyTypificationThree,
    39: penaltyTypificationThree,
    40: penaltyTypificationThree,
    41: penaltyTypificationThree,
    42: penaltyTypificationThree,
    43: penaltyTypificationThree,
    44: penaltyTypificationThree,
    45: penaltyTypificationThree,
    46: penaltyTypificationThree,
    47: penaltyTypificationThree,
    48: penaltyTypificationThree,
    49: penaltyTypificationThree,
    50: penaltyTypificationThree,
    51: penaltyTypificationThree,
    52: penaltyTypificationThree,
    53: penaltyTypificationFour,
    54: penaltyTypificationFour,
    55: penaltyTypificationFour,
    56: penaltyTypificationFour,
    57: penaltyTypificationFour,
    58: penaltyTypificationFour,
    59: penaltyTypificationFour,
  }
  const commissioned: PositionType = {
    0: penaltyTypificationFive,
    1: penaltyTypificationFive,
    2: penaltyTypificationFive,
    3: penaltyTypificationFive,
    4: penaltyTypificationFive,
    5: penaltyTypificationFive,
    6: penaltyTypificationFive,
    7: penaltyTypificationFive,
    8: penaltyTypificationFive,
    9: penaltyTypificationFive,
    10: penaltyTypificationFive,
    11: penaltyTypificationFive,
    12: penaltyTypificationFive,
    13: penaltyTypificationFive,
    14: penaltyTypificationOne,
    15: penaltyTypificationOne,
    16: penaltyTypificationOne,
    17: penaltyTypificationFive,
    18: penaltyTypificationFive,
    19: penaltyTypificationFive,
    20: penaltyTypificationFive,
    21: penaltyTypificationFive,
    22: penaltyTypificationFive,
    23: penaltyTypificationFive,
    24: penaltyTypificationFive,
    25: penaltyTypificationFive,
    26: penaltyTypificationFive,
    27: penaltyTypificationFive,
    28: penaltyTypificationFive,
    29: penaltyTypificationFive,
    30: penaltyTypificationFive,
    31: penaltyTypificationFive,
    32: penaltyTypificationFive,
    33: penaltyTypificationFive,
    34: penaltyTypificationFive,
    35: penaltyTypificationFive,
    36: penaltyTypificationFive,
    37: penaltyTypificationFive,
    38: penaltyTypificationFive,
    39: penaltyTypificationFive,
    40: penaltyTypificationFive,
    41: penaltyTypificationFive,
    42: penaltyTypificationFive,
    43: penaltyTypificationFive,
    44: penaltyTypificationFive,
    45: penaltyTypificationFive,
    46: penaltyTypificationFive,
    47: penaltyTypificationFive,
    48: penaltyTypificationFive,
    49: penaltyTypificationFive,
    50: penaltyTypificationFive,
    51: penaltyTypificationFive,
    52: penaltyTypificationFive,
    53: penaltyTypificationSix,
    54: penaltyTypificationSix,
    55: penaltyTypificationSix,
    56: penaltyTypificationSix,
    57: penaltyTypificationSix,
    58: penaltyTypificationSix,
    59: penaltyTypificationSix,
  }

  const effectiveCommissioned: PositionType = {
    0: penaltyTypificationSeven,
    1: penaltyTypificationSeven,
    2: penaltyTypificationSeven,
    3: penaltyTypificationSeven,
    4: penaltyTypificationSeven,
    5: penaltyTypificationSeven,
    6: penaltyTypificationSeven,
    7: penaltyTypificationSeven,
    8: penaltyTypificationSeven,
    9: penaltyTypificationSeven,
    10: penaltyTypificationSeven,
    11: penaltyTypificationSeven,
    12: penaltyTypificationSeven,
    13: penaltyTypificationSeven,
    14: penaltyTypificationOne,
    15: penaltyTypificationOne,
    16: penaltyTypificationOne,
    17: penaltyTypificationSeven,
    18: penaltyTypificationSeven,
    19: penaltyTypificationSeven,
    20: penaltyTypificationSeven,
    21: penaltyTypificationSeven,
    22: penaltyTypificationSeven,
    23: penaltyTypificationSeven,
    24: penaltyTypificationSeven,
    25: penaltyTypificationSeven,
    26: penaltyTypificationSeven,
    27: penaltyTypificationSeven,
    28: penaltyTypificationSeven,
    29: penaltyTypificationSeven,
    30: penaltyTypificationSeven,
    31: penaltyTypificationSeven,
    32: penaltyTypificationEight,
    33: penaltyTypificationEight,
    34: penaltyTypificationEight,
    35: penaltyTypificationEight,
    36: penaltyTypificationEight,
    37: penaltyTypificationEight,
    38: penaltyTypificationEight,
    39: penaltyTypificationEight,
    40: penaltyTypificationEight,
    41: penaltyTypificationEight,
    42: penaltyTypificationEight,
    43: penaltyTypificationEight,
    44: penaltyTypificationEight,
    45: penaltyTypificationEight,
    46: penaltyTypificationEight,
    47: penaltyTypificationEight,
    48: penaltyTypificationEight,
    49: penaltyTypificationEight,
    50: penaltyTypificationEight,
    51: penaltyTypificationEight,
    52: penaltyTypificationEight,
    53: penaltyTypificationNine,
    54: penaltyTypificationNine,
    55: penaltyTypificationNine,
    56: penaltyTypificationNine,
    57: penaltyTypificationNine,
    58: penaltyTypificationNine,
    59: penaltyTypificationNine,
  }

  const contextResults = useContext(GlobalContext);
  const resultSummationDegrees = contextResults.resultDegressPhaseOne + contextResults.resultDegressPhaseTwo
  const recurrence = contextResults.recurrence;
  const position = contextResults.positionSelected;
  const selectedTypification = contextResults.selectedTypifications;
  let listResults: Array<ResultTypification> = [];
  

  function penaltyTypificationOne() {
    if (resultSummationDegrees <= 30) {

      return recurrence ? { result: 'SUSPENSÃO DE 1 DIA', weight: 2, days: 1 } : { result: 'ADVERTÊNCIA', weight: 1 };
    }

    const resultDaysPenalty = resultSummationDegrees > 120 ? 90 : resultSummationDegrees - 30;

    return { result: `SUSPENSÃO DE ${Math.floor(resultDaysPenalty)} DIA(S). `, weight: 2, days: resultDaysPenalty }
  }

  function penaltyTypificationTwo() {
    const result = resultSummationDegrees * 0.75;

    return result > 90 ? { result: 'DEMISSÃO', weight: 3 } : { result: `SUSPENSÃO DE ${Math.floor(result)} DIA(S).`, weight: 2, days: Math.floor(result) };
  }

  function penaltyTypificationThree() {

    return { result: 'DEMISSÃO', weight: 3 };
  }

  function penaltyTypificationFour() {
    if (resultSummationDegrees <= 30) {

      return { result: 'ADVERTÊNCIA', weight: 1 };
    }
    const resultDaysPenalty = resultSummationDegrees - 30;

    return resultSummationDegrees > 90 ? { result: 'DEMISSÃO', weight: 3 } : { result: `SUSPENSÃO DE ${Math.floor(resultDaysPenalty)} DIA(S).`, weight: 2, days: resultDaysPenalty }
  }

  function penaltyTypificationFive() {
    return { result: 'DESTITUIÇÃO DO CARGO EM COMISSÃO', weight: 3 };
  }
  function penaltyTypificationSix() {
    if (resultSummationDegrees <= 30) {
      return { result: 'ADVERTÊNCIA', weight: 1 };
    }
    const resultDaysPenalty = resultSummationDegrees - 30;

    return resultSummationDegrees > 90 ? { result: 'DESTITUIÇÃO DO CARGO EM COMISSÃO', weight: 3 } : { result: `SUSPENSÃO DE ${Math.floor(resultDaysPenalty)} DIA(S).`, weight: 2, days: resultDaysPenalty }
  }

  function penaltyTypificationSeven() {
    const result = resultSummationDegrees * 0.75;

    return result > 90 ? { result: 'DEMISSÃO E DESTITUIÇÃO DO CARGO EM CONFIANÇA', weight: 4 } : { result: `SUSPENSÃO DE ${Math.floor(result)} DIA(S) E DESTITUIÇÃO DO CARGO EM CONFIANÇA.`, weight: 3, days: Math.floor(result) };
  }

  function penaltyTypificationEight() {
    return { result: 'DEMISSÃO E DESTITUIÇÃO DO CARGO EM CONFIANÇA', weight: 4 };
  }
  function penaltyTypificationNine() {
    if (resultSummationDegrees <= 30) {
      return { result: 'ADVERTÊNCIA', weight: 1 };
    }
    const resultDaysPenalty = resultSummationDegrees - 30;

    return resultSummationDegrees > 90 ? { result: 'DEMISSÃO E DESTITUIÇÃO DO CARGO EM CONFIANÇA', weight: 4 } : { result: `SUSPENSÃO DE ${Math.floor(resultDaysPenalty)} DIA(S).`, weight: 2, day: resultDaysPenalty }
  }

  function resultTypificationPenalty(listResults: Array<ResultTypification>) {

    const weightList = listResults.map(result => result.weight)
    const heavier = Math.max(...weightList);
    const heavierListResults = listResults.filter(result => result.weight === heavier)

    if (heavierListResults.length > 1 && heavier === 2) {
      const daysList = heavierListResults.map(result => result.days)
      const daysListNumber = daysList.map(day => Number(day));
      const biggestDay = Math.max(...daysListNumber)

      return heavierListResults.filter(result => result.days === biggestDay)[0]

    } else {
      return heavierListResults[0]
    }
  }

  // if(resultSummationDegrees > 0) {
  //   if (position === 'effective') {
  //     if (selectedTypification.length > 0) {
  //       listResults = selectedTypification.map((selected: keyof PositionType) => effective[selected]())
  //     }
  //   }
  
  //   if (position === 'commissioned') {
  //     if (selectedTypification.length > 0) {
  //       listResults = selectedTypification.map((selected: keyof PositionType) => commissioned[selected]())
  //     }
  //   }
  //   if (position === 'effective-commissioned') {
  //     if (selectedTypification.length > 0) {
  //       listResults = selectedTypification.map((selected: keyof PositionType) => effectiveCommissioned[selected]())
  //     }
  //   }
  // }
  if(resultSummationDegrees > 0 && selectedTypification.length > 0) {
    if (position === 'effective') {
        listResults = selectedTypification.map((selected: keyof PositionType) => effective[selected]())
    }
    if (position === 'commissioned') {
        listResults = selectedTypification.map((selected: keyof PositionType) => commissioned[selected]())
    }
    if (position === 'effective-commissioned') {
        listResults = selectedTypification.map((selected: keyof PositionType) => effectiveCommissioned[selected]())
    }
  }
  const resultPenalty = resultTypificationPenalty(listResults)

  return <ResultStyle>{resultPenalty ? resultPenalty.result : ''}</ResultStyle>
}