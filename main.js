/**
 * Verifica quando os valores são
 * "IV", 4
 * "IX", 9
 * "XL", 40
 * "XC", 90
 * "CD", 400
 * "CM", 900
 */

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
  const spanHtmlResult = document.getElementById("result-text");
  let result = toChooseOperation(number1, number2, operationSign);
  result = printRoman(result);

  spanHtmlResult.innerHTML = `${result}`;
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

function toChooseOperation(value1, value2, operationSymbol) {
  switch (operationSymbol) {
    case "+":
      return sum(value1, value2);
    case "-":
      return difference(value1, value2);
    case "*":
      return product(value1, value2);
    case "/":
      return quotient(value1, value2);
  }
}

function sum(term1, term2) {
  return term1 + term2;
}

function difference(minuend, subtrahend) {
  return minuend - subtrahend;
}

function product(multiplier, multiplicand) {
  return multiplier * multiplicand;
}

function quotient(numerator, denominator) {
  return numerator / denominator;
}

/**
 * Fonte https://acervolima.com/conversao-de-numeros-decimais-entre-1-e-3999-em-algarismos-romanos/
 * JavaScript Program to convert decimal number to
 * roman numerals
 *
 * Function to convert decimal to Roman Numerals
 * This code is contributed by Manoj
 */

function printRoman(number) {
  let num = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
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
  let romanSetence = "";
  let i = 12;
  while (number > 0) {
    let div = Math.floor(number / num[i]);
    number = number % num[i];
    while (div--) {
      romanSetence += sym[i];
    }
    i--;
  }

  return romanSetence;
}
