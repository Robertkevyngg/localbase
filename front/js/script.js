const protocolo = 'http://';
const baseURL = 'localhost:3000';
const filmeEndPoint = '/filmes';

async function obterFilmes() {
    const URLcompleta = `${protocolo}${baseURL}${filmeEndPoint}`;
    const filmes = (await axios.get(URLcompleta)).data
    let tabela = document.querySelector('.filmes');
    let corpotabela = tabela.getElementsByTagName('tbody')[0];
    for (let filme of filmes) {
        let linha = corpotabela.insertRow();
        let celulatitulo = linha.insertCell();
        let celulasinopse = linha.insertCell();
        celulatitulo.innerHTML = filme.titulo;
    
    }

    console.log(filmes);
}