import { conectaApi } from "./conectarApi.js";

const lista = document.querySelector("[data-lista]")

/**
* Cria um elemento de vídeo com base nos parâmetros fornecidos.
*
* @param {string} url - O URL do vídeo.
* @param {string} titulo - O título do vídeo.
* @param {string} imagem - O URL da imagem do vídeo.
* @param {string} descricao - A descrição do vídeo.
* @returns {HTMLElement} - O elemento de vídeo criado.
*/
export default function criarVideo(url, titulo, imagem, descricao) {
    /**
    * Cria um elemento de vídeo personalizado com as informações fornecidas.
    * 
    * @type {HTMLElement}
    */
    const video = document.createElement("li");
    
    // Define a classe do elemento para estilização
    video.classList = "videos__item";
    
    // Define o conteúdo do elemento de vídeo usando templates literais
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
                        title="Alura" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                        <div class="descricao-video">
                            <img src="${imagem}" alt="alura" class="imagem_perfil">
                            <div class="descricao-descricao">
                                <h3>${titulo}</h3>
                                <p>${descricao}</p>
                            </div>
                        </div>`;
    
    // Retorna o elemento de vídeo personalizado
    return video;
}

/**
Recupera uma lista de vídeos de uma API e os anexa a um elemento HTML especificado.
@returns {Promise<void>} Uma promessa que é resolvida quando os vídeos são anexados ao elemento HTML.
*/
async function listaVideos() {
    try{
        // Busca dados de vídeo da API
        const listaApi = await conectaApi.listaVideos();

        //Itera sobre cada vídeo nos dados obtidos
        listaApi.forEach(elemento => {
            // Cria elementos HTML para cada vídeo e os anexa ao elemento HTML especificado
            lista.appendChild(criarVideo(elemento.url, elemento.titulo, elemento.imagem, elemento.descricao));
        });
    } catch {
        lista.innerHTML = '<h3 class="mensagem__titulo">Não foi possivel estabelecer conexão com o servidor, por favor tente mais tarde.</h3>'
    }
}

listaVideos();