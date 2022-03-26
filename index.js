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

function checkRomanNumerals(numerals) {
  switch (numerals) {
    case numerals === "IV":
      return 4;
    case numerals === "IX":
      return 9;
    case numerals === "XL":
      return 40;
    case numerals === "XC":
      return 90;
    case numerals === "CD":
      return 400;
    case numerals === "CM":
      return 900;
    default:
      return 0;
  }
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

console.log("X" + "C");
