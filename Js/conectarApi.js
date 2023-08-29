/**
* Obtém uma lista de vídeos de uma URL especificada e retorna a resposta convertida como um objeto JSON.
* @returns {Promise} Uma promessa que é resolvida para o objeto JSON obtido a partir da URL especificada.
*/
async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");

    let conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function adicionarVideo (titulo, descricao, url, imagem){
    const conexao = await fetch("http://localhost:3000/videos", {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações` ,
            url: url,
            imagem: imagem
        })  
    })
    if (!conexao.ok) {
        throw new Error("Não foi possivel enviar o video");
    }
    let conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function buscarVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    let conexaoConvertida = await conexao.json();

    return conexaoConvertida
}
export const conectaApi = {
    listaVideos,
    adicionarVideo,
    buscarVideo
}