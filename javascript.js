function clicar() {
  var peso = document.querySelector(".peso").value;
  var m = document.querySelector(".m").value;
  var cm = document.querySelector(".cm").value;
  var alt = m + "." + cm;
  var res = parseFloat(peso) / (parseFloat(alt) * parseFloat(alt));
  var imc = parseFloat(res.toFixed(2));
  var classificacao = "";

switch (true) {
    case (imc < 18.5):
        classificacao =("Abaixo do peso");
        break;
    case (imc < 24.5):
        classificacao =("Peso normal");
        break;
    case (imc < 29.9):
        classificacao =("Sobrepeso");
        break;
    case (imc < 34.9):
        classificacao =("Obesidade grau 1");
        break;
    case (imc < 39.9):
        classificacao =("Obesidade grau 2");
        break;
    case (imc >= 39.9):
        classificacao =("Obesidade grau 3");
        break;
    default:
        classificacao =("");
        break;
}

  document.querySelector(".resultado").innerHTML = imc;
  document.querySelector(".classificacao").innerHTML = classificacao;
}
