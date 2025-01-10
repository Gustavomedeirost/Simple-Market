import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
import verificarListaVazia from "./scripts/verficarListaVazia.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");
const inputItem = document.getElementById("input-item");

// Lógica para adicionar o item ao clicar no botão
botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    adicionarItem();
});

// Lógica para adicionar o item ao pressionar a tecla Enter
inputItem.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") {
        evento.preventDefault(); // Impede o comportamento padrão de recarregar a página
        adicionarItem();
    }
});

// Função reutilizável para adicionar um item
function adicionarItem() {
    const itemDaLista = criarItemDaLista();
    if (itemDaLista) { 
        listaDeCompras.appendChild(itemDaLista);
        verificarListaVazia(listaDeCompras);
    }
}

// Verifica inicialmente se a lista está vazia
verificarListaVazia(listaDeCompras);
