
const prompt = require('prompt-sync')();
var array_bicicletas = [];

do {
  console.log("Sistema de Cadastro de Bicicletas");
  console.log("1 - Inserir Bicicleta");
  console.log("2 - Excluir Bicicleta");
  console.log("3 - Listar Bicicleta");
  console.log("0 - Sair");

  var opcao = prompt("Digite sua opção: ");

    if (opcao == 1) {
      console.log("\n\nInserindo Bicicleta...\n");
      let codigo = parseInt(prompt("Digite o código: "));
      let marca = prompt("Digite a marca: ");
      let modelo = prompt("Digite o modelo: ");
      let tamanho = prompt("Digite o tamanho: ");
      let cor = prompt("Digite a cor: ");

      // Neste trecho estamos declarando um objeto
      const bicicleta = {
      codigo: codigo,
      marca: marca,
      modelo: modelo,
      tamanho: tamanho,
      cor: cor
      }


      // Chamar a função inserir
      inserir_bicicleta(bicicleta)

    }else if(opcao == 2){
      console.log("\n\nExcluindo Bicicletas...\n")

      // Chamar a função excluir
      const cod = prompt('Código a ser excluído: ')
      excluir_bicicleta(cod);

    } else if(opcao == 3) {
      console.log("\n\nListando Bicicletas...\n")
      // Chamar a função listar
      listar_bicicleta();
    } else if (opcao == 0){
      console.log("\n\nSaindo do programa...\n")
    }

  prompt("\nEnter para continuar...");
  console.clear();

} while (opcao != 0)


function inserir_bicicleta(bicicleta) {
  // Implementar corpo da função
  array_bicicletas.push(bicicleta); 
}
function excluir_bicicleta(codigo) {
  // Implementar corpo da função
  for (let i = 0; i < array_bicicletas.length; i++) { 
    if (array_bicicletas[i].codigo == codigo) {
      array_bicicletas.splice(i, 1);
      console.log("\n\nBicicleta excluída com sucesso!\n");

    }
  }
}

function listar_bicicleta() {
  if (array_bicicletas.length==0){
    console.log("\n\nNão existem bicicletas cadastradas!\n")
  }
  // Implementar corpo da função
  for (let i = 0; i < array_bicicletas.length; i++) {
   
    console.log(`${array_bicicletas[i].codigo} : ${array_bicicletas[i].marca} - ${array_bicicletas[i].modelo} - ${array_bicicletas[i].tamanho} - ${array_bicicletas[i].cor}`)
  }
}



