import gerarDiaDaSemana from "./gerarDiaDaSemana.js";
const inputItem = document.getElementById("input-item")
let contador = 0;

export function criarItemDaLista() {
   
    if (inputItem.value === "") {
        alert("Por favor, insira um item!");
        return
    }

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");
    
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;
    
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    //logica para riscar o nome
    inputCheckbox.addEventListener("click", function () {
        nomeItem.style.textDecoration = inputCheckbox.checked ? "line-through" : "none";
      });

      const botaoExcluir = document.createElement("button");
      botaoExcluir.innerText = "Excluir";  // Texto do botão é 'Excluir'
      botaoExcluir.classList.add("botao-excluir");  // Adiciona uma classe CSS para estilizar o botão
      
      // Adiciona um evento de clique para excluir o item da lista
      botaoExcluir.addEventListener("click", function () {
          itemDaLista.remove();  // Remove o item da lista
          verificarListaVazia(document.getElementById("lista-de-compras"));  // Verifica se a lista está vazia
      });
      

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);
    containerItemDaLista.appendChild(botaoExcluir);

    itemDaLista.appendChild(containerItemDaLista)
    
    //adicionar data e hora
    const dataCompleta = gerarDiaDaSemana();
    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data");
    itemDaLista.appendChild(itemData);

      // Limpar o input após adicionar
    inputItem.value = "";

   return itemDaLista;
}
