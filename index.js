let number = 3549;

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

  for (let i = 12; number > 0; i--) {
    let div = Math.floor(number / num[i]);
    if (i == 10) {
      console.log(div);
      console.log(number);
      console.log(number % num[i]);
    }
    number = number % num[i];
    while (div--) {
      // console.log(sym[i]);
    }
  }
}

printRoman(number);
