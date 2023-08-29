import { conectaApi } from "../Js/conectarApi.js";

const $ = (seletor) => document.querySelector(seletor);
const $$ = (seletor) => document.querySelectorAll(seletor);
Element.prototype.on = Element.prototype.addEventListener;

//cria uma constanteque armazena o data-attribute do formulario
const formulario = $("[data-formulario]")

//uma função que armazena os data-attributes das label's URL, TITULO, IMAGEM, DESCRIÇÂO
async function adicionarvideo(evento) {
    //previne eventos padrões, como a atualização da pagina.
    evento.preventDefault();

    const url = $("[data-url]").value;
    const titulo = $("[data-titulo]").value;
    const imagem = $("[data-imagem]").value;
    const descricao = Math.floor(Math.random() * 10).toString();

    try{
    //tendo feito a importação, mandamos como parametro o valor das constantes.
    await conectaApi.adicionarVideo(titulo, descricao, url, imagem)

    window.location.href = "../pages/concluido.html";
    } catch (e) {
        alert(e);
    }
}

/*A constante fomulario recebe uma evento "escutador" que espera um 'submit'
assim ativando a a função adicionarvideo*/
formulario.on("submit", evento => adicionarvideo(evento));