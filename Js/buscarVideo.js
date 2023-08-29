import { conectaApi } from "./conectarApi.js";
import criarVideo from "./mostrarVideos.js";

const $ = (seletor) => document.querySelector(seletor);
const $$ = (seletor) => document.querySelectorAll(seletor);
Element.prototype.on = Element.prototype.addEventListener;

async function buscaVideo(evento) {
    evento.preventDefault();

    const lista = $("[data-lista]");
    const dadosPesquisa = $("[data-pesquisa]").value;
    const busca = await conectaApi.buscarVideo(dadosPesquisa);

    lista.innerHTML = ''

    busca.forEach((elemento) => lista.appendChild(criarVideo(elemento.url, elemento.titulo, elemento.imagem, elemento.descricao)));

    if (busca.length == 0){
        lista.innerHTML = `<h3 class="mensagem__titulo">Busca não encontrada, não foi possivel encontrar vídeos com o termo "${dadosPesquisa}"</h3>`}
}

const campoPesquisa = $("[data-pesquisa]");

campoPesquisa.on("keydown", (evento) => {
    if (evento.key === "Enter") {
        evento.preventDefault();
        buscaVideo(evento);
    }
});

const botaoPesquisa = $("[data-botao-pesquisa]");

botaoPesquisa.on("click", (evento) => {
    console.log("clicou") 
    buscaVideo(evento)
});
