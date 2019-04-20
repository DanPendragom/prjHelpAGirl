function escrever(){
  var texto = document.getElementById('textoOrigem').value;
  document.getElementById('textoDestino').textContent = texto;
}
function alteraCor(){
  var cor = document.getElementById('cor').value;
  document.getElementById('textoDestino').style.color = cor;
}
function negrito(){
    document.getElementById("textoDestino").style = "font-weight: bolder"
  }
function italico(){
  document.getElementById("textoDestino").style = "font-style: italic";
}
function sublinhado(){
  document.getElementById("textoDestino").style = "text-decoration: underline";
}
function tamanhoFonte(){
  var e = document.getElementById("tfonte");
  var selecionado = e.options[e.selectedIndex].value;
  document.getElementById("textoDestino").style = "font-size:"+selecionado;
}
function fonte(){
  var e = document.getElementById("fonte");
  var selecionado = e.options[e.selectedIndex].value;
  document.getElementById("textoDestino").style = "font-family:"+selecionado;
}

// Pesqusiar sobre o D.O.M (Document Object Manage)
