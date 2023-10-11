const prompt = require('prompt-sync')();

var alturas = [];

for (var i = 0; i<10; i++) {
   a = parseFloat(prompt("Digite a altura: " ));
   alturas.push(a);
}
for (var i = 0; i<10; i++){
  var alturaAtual = alturas[i];
  var alturasMaiores = 0;
  
  for (var j = 0; j<10; j++){
    if(i == j){
      continue;
    }
    if (alturaAtual > alturas[j]){
      alturasMaiores++;
    }
    
    }

  console.log('Aluno',i,': maior que',alturasMaiores,'aluno(s)'); 
  
  }


  






// Implementar a entrada de dados

// Implementar o processamento de dados
// Fazer for dentro de for

// Implementar a saída de dados

