const prompt = require('prompt-sync')();

idade = parseInt(prompt("Digite sua idade: "));
tempo = parseInt(prompt("Digite seu tempo de serviço: "));
salario = parseFloat(prompt("Digite seu salário: "));

// Implementar o comando de decisão para verificar se o cidadão pode, ou não, se aposentar

if ((idade>= 65) || (tempo>= 30) || (idade>= 60) && (tempo>= 25)){
 var salario80 = salario  * 0.80;
 var salario60 = salario * 0.60;
  if(tempo>20) {
    liquido= salario80;
    if(liquido>7087.22){
      liquido = 7087.22;
    }
    else if(liquido<1212)
      liquido = 1212
  }else if(tempo<=20){
    liquido= salario60;
    if(liquido>7087.22){
      liquido = 7087.22;
    }
    else(liquido<1212)
      liquido = 1212
    
  }
  
  
       
  

console.log("Você pode se aposentar!");
console.log("Seu salário de aposentado será: "  , liquido );
  
}

else{
 
console.log("Você não pode se aposentar!");

}


  
 