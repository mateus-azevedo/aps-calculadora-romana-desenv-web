const value1 = "XX";
const value2 = "I";

const valor = "CC";

seiLa(valor);

function seiLa(valor) {
  let verifica = 0;
  let testa = "";

  for (let i = 0; i < valor.length; i++) {
    if (valor[i] === valor[i + 1]) {
      verifica += converteAlgarismoIguais(valor[i]);
      testa = verifica.toString();
      // console.log(testa[0]);
    } else if (testa[0] === "2" && valor[i] === valor[i - 1]) {
      verifica += converteAlgarismoIguais(valor[i]);
    }
  }

  console.log(verifica);
}

function converteAlgarismoIguais(valor) {
  switch (valor) {
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
