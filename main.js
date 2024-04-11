document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault();
    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);
    
    if (campoB > campoA) {
      document.getElementById("mensagem").innerHTML = "<span>Formulário válido!</span> B é maior que A.";
      document.getElementById("mensagem").className = "mensagem-valida";
    } else {
      document.getElementById("mensagem").innerHTML = "<span>Formulário inválido!</span> B precisa ser maior que A.";
      document.getElementById("mensagem").className = "mensagem-invalida";
    }
  });