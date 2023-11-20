var cachorros = [{ "nome": "Thor", "imagem": "dog1" }, { "nome": "Zeca", "imagem": "dog2" }, { "nome": "Zeus", "imagem": "dog3" }, { "nome": "Pingo", "imagem": "dog4" }];

var gatos = [{ "nome": "Dunga", "imagem": "cat1" }, { "nome": "Mika", "imagem": "cat2" }, { "nome": "Conan", "imagem": "cat3" }, { "nome": "Messi", "imagem": "cat4" }];

// Selecionar elemento 'select_animais' ( 1 ponto)
var select = document.getElementById("select_animais");
// Selecionar elemento 'container' ( 1 ponto)
var container = document.getElementById("container");
// Selecionar elemento 'nome' ( 1 ponto)
var nome = document.getElementById("nome");

// Adicionar Listener 'input' ao elemento 'select_animais' (1 ponto)
select.addEventListener("input", listarAnimais);

// Adicionar Listener 'mouseover' ao elemento 'container' (1 ponto)
container.addEventListener("mouseover", mostrarNome);

// Adicionar Listener 'mouseout' ao elemento 'container' (1 ponto)
container.addEventListener("mouseout", limparNome);

function listarAnimais() { // Implementação da função (10 pontos)
  limparDivContainer();
  // Implementar...
  const animais = select.value
  console.log(animais)
  if (animais == "dog") {

    cachorros.forEach((c) => {
      console.log(c)
      const img = document.createElement("img");
      img.src = `img/${c.imagem}.jpg`;
      container.appendChild(img);
    })
  }
  else if (animais == "cat") {
    gatos.forEach((g) => {
      const img = document.createElement("img");
      img.src = `img/${g.imagem}.jpg`;
      container.appendChild(img);
    })
  }


}



function mostrarNome(e) { // Implementação da função (4 pontos)
  // Implementar...

  const mouseEnter = e.target.src;
  const mouseEnterLength = mouseEnter.length;
  const mouseEnterNameimg = mouseEnter.slice(mouseEnterLength - 8)
  if (select.value == 'dog') {
    for (let i = 0; i < cachorros.length; i++) {
      const imagem = cachorros[i].imagem
      if (mouseEnterNameimg.includes(imagem)) {
        console.log('entrou aqui ' + mouseEnterNameimg)
        nome.textContent = cachorros[i].nome
      }
    }
  }
  else if (select.value == 'cat') {
    for (let i = 0; i < gatos.length; i++) {
      const imagem = gatos[i].imagem
      if (mouseEnterNameimg.includes(imagem)) {
        console.log('entrou aqui ' + mouseEnterNameimg)
        nome.textContent = gatos[i].nome
      }
    }

  }



}
function limparNome() {
  //p.innerText = "";
  nome.textContent = '';

}

// Função para limpar as imagens antigas, antes de inserir novas imagens
function limparDivContainer() {
  var elemento = document.querySelector("#container");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}