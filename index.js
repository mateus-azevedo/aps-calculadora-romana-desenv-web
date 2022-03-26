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

  if (checkRomanNumerals(romanException)) {
    valueInDecimal += checkRomanNumerals(romanException);
    i += 2;
    continue;
  }
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
// seiLa(valor);

// function seiLa(valor) {
//   let verifica = 0;
//   let testa = "";

//   for (let i = 0; i < valor.length; i++) {
//     if (valor[i] === valor[i + 1]) {
//       verifica += converteAlgarismoIguais(valor[i]);
//       testa = verifica.toString();
//       // console.log(testa[0]);
//     } else if (testa[0] === "2" && valor[i] === valor[i - 1]) {
//       verifica += converteAlgarismoIguais(valor[i]);
//     }
//   }

//   console.log(verifica);
// }

// function converteAlgarismoIguais(valor) {
//   switch (valor) {
//     case "I":
//       return 1;
//     case "X":
//       return 10;
//     case "C":
//       return 100;
//     case "M":
//       return 1000;
//   }
// }
