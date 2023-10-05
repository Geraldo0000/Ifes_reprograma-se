// Implementar comando de repetição (de 1 até 20)
  // Implementar os comandos de decisão para verificar números quadrados pares ou ímpares


var somaPar = 0
var somaImpar = 0

for (var i = 1; i<= 20; i++) {

  var par = i % 2 == 0;
  var impar = i % 2 == 1;

  if (par) {
    somaPar = somaPar + i**2;
    console.log(i**2);
  }
    
  else if(impar) {
    somaImpar = somaImpar + i**2;
    console.log(i**2);
  }
  
}
  
console.log("A soma dos quadrados pares: ", somaPar);
console.log("A soma dos quadrados impares: ", somaImpar);

  
  

   


  