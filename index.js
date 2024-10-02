const express = require('express');
const app = express();

app.use(express.json());

app.get('/oi', (req, res) => { res.send('oi'); });


//get http://localhost:3000/filmes

let filmes = [
    {
        titulo: "O Poderoso Chefão",
        sinopse: "mafia.",
    },
    {
        titulo: "Titanic",
        sinopse: "O Titanic é um navio de passageiros que colidiu com um iceberg no Ocean Indiano na madrugada do dia 15 de abril de 1912, causando a morte de mais de 1,5 million de pessoas.",
        
    }
]

app.get('/filmes', (req, res) => { res.json(filmes); });

app.post('/filmes', (req, res) => {
    // Captura o que o usuário enviou
    const titulo = req.body.titulo;
    const sinopse = req.body.sinopse;
    // Monta o objeto filme para incluir na base de dados
    const filme = { titulo: titulo, sinopse: sinopse };
    // Adiciona o novo filme na base de dados
    filmes.push(filme);
    // Responde com o filme adicionado
    res.status(201).json(filme);
});
app.listen(3000, () =>   console.log('Server is running on port 3000'));