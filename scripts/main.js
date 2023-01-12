function funcao01() {
  var x;
  var nome = prompt("Digita seu nome pf");
  if (nome == "") {
    alert("Digita seu nome po");
  } else {
    x = "nome: " + nome;
    document.getElementById("demonstra").innerHTML = x;
  }
}
