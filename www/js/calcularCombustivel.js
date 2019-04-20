window.onload = function(){
var valorA;
var valorB;
var resultado;

var btnResultado = document.getElementById('btnResultado');
btnResultado.addEventListener('click', function(){

valorA = document.getElementById('valorAlcool').value;
valorB = document.getElementById('valorGasolina').value;
resultado = parseFloat(valorA) / parseFloat(valorB);

if(resultado < 0.7){
  document.getElementById('opcao').value = "Abasteça com Álcool";
}
else{
  document.getElementById('opcao').value = "Abasteça com Gasolina";
}
});

var qtdPessoas;
var qtdRefri;
var qtdAgua;
var qtdDoce;
var qtdSalgado;
var qtdBolo;

var exibirRes = document.getElementById('exibirRes');
exibirRes.addEventListener('click', function(){
  qtdPessoas = document.getElementById('qtdPessoas').value;

qtdRefri = 600 * parseFloat(qtdPessoas);
qtdAgua = 200 * parseFloat(qtdPessoas);
qtdBolo = 100 * parseFloat(qtdPessoas);
qtdDoce = 3 * parseFloat(qtdPessoas);
qtdSalgado = 10 * parseFloat(qtdPessoas);

  document.getElementById('qtdRefri').value = qtdRefri + " ml";
  document.getElementById('qtdAgua').value = qtdAgua + " ml";
  document.getElementById('qtdBolo').value = qtdBolo + " gramas";
  document.getElementById('qtdDoce').value = qtdDoce + " unidades";
  document.getElementById('qtdSalgado').value = qtdSalgado + " unidades";
});
}
