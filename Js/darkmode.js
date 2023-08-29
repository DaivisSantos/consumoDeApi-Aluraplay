// """
// Adiciona um ouvinte de eventos ao botão 'darkmodebnt' que alterna a classe 'darkmode' no elemento 'body' quando clicado.

// Exemplo de Uso:
// ```javascript

const darkmodebnt = document.querySelector('#btnDark');
const body = document.body;

if (darkmodebnt && body) {
    darkmodebnt.addEventListener("click", () => {
    body.classList.toggle('darkmode');
    });
} else {
    console.error("Elements not found.");
}

// Entradas:
// - darkmodebnt: O elemento de botão com o ID 'btnDark'.
// - body: O elemento body do documento.

// Fluxo:
// 1. Verifica se tanto o botão 'darkmodebnt' quanto o elemento 'body' existem no DOM.
// 2. Se eles existirem, adiciona um ouvinte de eventos ao botão 'darkmodebnt'.
// 3. Quando o botão for clicado, alterna a classe 'darkmode' no elemento 'body' usando o método `classList.toggle()`.
// 4. Se o botão 'darkmodebnt' ou o elemento 'body' não forem encontrados, registra uma mensagem de erro no console.

// Saídas:
// - Modifica o elemento 'body' alternando a classe 'darkmode' quando o botão 'darkmodebnt' for clicado.
// """