const porcentagemVal1 = document.getElementById("porcentagemVal1");
const valorNumerico1 = document.getElementById("valorNumerico1");
const resultado = document.getElementById("resultadoCalc1");

function porcentagem() {
  let retorno = 0;
  retorno = (valorNumerico1.value / 100) * porcentagemVal1.value;
  resultado.value = `R$${retorno.toFixed(2)}`;
}

function percentual() {
  var num1 = document.getElementById("valorNumeroVal2").value;
  var num2 = document.getElementById("valorNumeroVal3").value;
  document.getElementById("resultadoCalc").value = (num1 * 100) / num2 + "%";
}
