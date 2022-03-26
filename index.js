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

const num = "XXC";

let i = 0;
let valueInDecimal = 0;
while (i < num.length) {
  let current = i;
  let next = i + 1;
  let romanException = num[current] + num[next];
  let hasDoubleRomanNumeral = checkRomanNumerals(romanException);

  if (hasDoubleRomanNumeral) {
    valueInDecimal += checkRomanNumerals(romanException);
    i += 2;
    continue;
  }

  valueInDecimal += checkRomanNumeralValue(num[current]);
  i++;
}

console.log(valueInDecimal);

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
    case "X":
      return 10;
    case "C":
      return 100;
    case "M":
      return 1000;
  }
}
