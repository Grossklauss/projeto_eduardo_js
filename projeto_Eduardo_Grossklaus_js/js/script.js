var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  //Chama a compararNumeros
  compararNumeros();

});


//Função somar
function compararNumeros() {
  

  //Captura o que está dentro do primeiro input no formulário
  //Number - Transforma o texto capturado em Numero
  let primeiro_numero_inteiro = Number(document.getElementById("primeiro_numero_inteiro").value);
  
  //Captura o que está dentro do segundo input no formulário
  //Number - Transforma o texto capturado em Numero
  let segundo_numero_inteiro = Number(document.getElementById("segundo_numero_inteiro").value); 
  
  //Realiza a soma do valor que está na variável "primeiro_numero_inteiro" com o valor que está na
  //variável "segundo_numero_inteiro"
  //E a variável "resultado_soma" recebe o valor da soma 
  
  let resultado_soma;

  if (primeiro_numero_inteiro > segundo_numero_inteiro) {
    resultado_soma = primeiro_numero_inteiro;
  } else {
    resultado_soma = segundo_numero_inteiro
  }

  //Aqui vai escrever no input "resultado_soma" o valor que está armazenado na variável "resultado_soma"
  document.getElementById("resultado_soma").value = resultado_soma;
  
  
}
