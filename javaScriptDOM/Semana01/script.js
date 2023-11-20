// Selecionar todos elementos da classe 'produto_preco'
var elementos = document.getElementsByClassName('produto_preco');
var soma = 0;

// Implementar um comando de repetição para analisar o valor 'innerText' de cada um dos elementos e somá-los (lembre-se de converter o valor para float)
for (let e of elementos) {
  soma += parseFloat(e.innerText);
}
// Escrever no conteúdo da página o valor da soma
document.write("Total: R$ " + soma);
  



