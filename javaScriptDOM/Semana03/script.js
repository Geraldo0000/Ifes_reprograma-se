(function() {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function(form) {
      form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
          form.classList.add('was-validated')
        } else {
          inserir()
          form.classList.remove('was-validated')
          form.reset()
        }
        event.preventDefault()
        event.stopPropagation()
      }, false)
    })
})()


function getLocalStorage() {
  return JSON.parse(localStorage.getItem('bd_bicicletas')) ?? [];
}

function setLocalStorage(bd_bicicletas) {
  localStorage.setItem('bd_bicicletas', JSON.stringify(bd_bicicletas));
}

function limparTabela() {
  var elemento = document.querySelector("#tabela>tbody");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}

function atualizarTabela() { // Adaptação da função atualizarTabela (5 pontos)
  limparTabela();
  const bd_bicicletas = getLocalStorage();
  let index = 0;
  for (bicicleta of bd_bicicletas) {
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <th scope="row">${index}</th>
        <td>${bicicleta.marca}</td>
        <td>${bicicleta.ano}</td>
        <td>${bicicleta.chassis}</td>
        <td>${bicicleta.tamanho}</td>
        <td>${bicicleta.cor}</td>
        <td>${bicicleta.tipo}</td>
        <td>
            <button type="button" class="btn btn-danger" id="${index}" onclick="excluir(${index})">Excluir</button>
        </td>
    `
    document.querySelector('#tabela>tbody').appendChild(novaLinha)
    index++;
  }
}

function inserir() { // Adaptação da função inserir (10 pontos)
  const bicicleta = {
    marca: document.getElementById('marca').value,
    ano: document.getElementById('ano').value,
    chassis: document.getElementById('chassis').value,
    tamanho: document.getElementById('tamanho').value,
    cor: document.getElementById('cor').value,
    tipo: document.getElementById('tipo').value
  }
  const bd_bicicletas = getLocalStorage();
  bd_bicicletas.push(bicicleta);
  setLocalStorage(bd_bicicletas);
  atualizarTabela();
}

function excluir(index) { // Adaptação da função excluir (5 pontos)
  const bd_bicicletas = getLocalStorage();
  bd_bicicletas.splice(index, 1);
  setLocalStorage(bd_bicicletas);
  atualizarTabela();
}

function validarChassis() { // Adaptação da função validar (10 pontos)
  const bd_bicicletas = getLocalStorage();
  for (bicicleta of bd_bicicletas) {
    if (chassis.value == bicicleta.chassis) {
      chassis.setCustomValidity("Este número de chassis já existe!");
      feedbackChassis.innerText = "Este número de chassis já existe!";
      return false;
    } else {
      chassis.setCustomValidity("");
      feedbackChassis.innerText = "Informe o chassis corretamente.";
    }
  }
  return true;
}

atualizarTabela();
// Seleção dos elementos e adição do listener para validação customizada (5 pontos)
const chassis = document.getElementById("chassis");
const feedbackChassis = document.getElementById("feedbackChassis");
chassis.addEventListener('input', validarChassis);