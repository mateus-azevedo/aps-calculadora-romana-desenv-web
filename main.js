/**
 * Verifica quando os valores são
 * "IV", 4
 * "IX", 9
 * "XL", 40
 * "XC", 90
 * "CD", 400
 * "CM", 900
 */

let sym = [
  "I",
  "IV",
  "V",
  "IX",
  "X",
  "XL",
  "L",
  "XC",
  "C",
  "CD",
  "D",
  "CM",
  "M",
];

function toggleButtonResult() {
  const [field1, field2] = [
    document.querySelector("#roman1").value.toUpperCase(),
    document.querySelector("#roman2").value.toUpperCase(),
  ];
  const [number1, number2] = [
    transformRomanToDecimal(field1),
    transformRomanToDecimal(field2),
  ];
  const operationSign = document.querySelector("#operation").value;
  console.log(number1);
  console.log(number2);
}

function transformRomanToDecimal(value) {
  let i = 0;
  let valueInDecimal = 0;

  while (i < value.length) {
    let current = i;
    let next = i + 1;
    let romanException = value[current] + value[next];
    let hasDoubleRomanNumeral = checkRomanNumerals(romanException);

    if (hasDoubleRomanNumeral) {
      valueInDecimal += checkRomanNumerals(romanException);
      i += 2;
      continue;
    }

    valueInDecimal += checkRomanNumeralValue(value[current]);
    i++;
  }

  return valueInDecimal;
}

function checkRomanNumerals(numerals) {
  let result = "";

  if (numerals === "IV") {
    result = 4;
  } else if (numerals === "IX") {
    result = 9;
  } else if (numerals === "XL") {
    result = 40;
  } else if (numerals === "XC") {
    result = 90;
  } else if (numerals === "CD") {
    result = 400;
  } else if (numerals === "CM") {
    result = 900;
  } else {
    result = 0;
  }

  return result;
}

function checkRomanNumeralValue(numeral) {
  switch (numeral) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
  }
}
