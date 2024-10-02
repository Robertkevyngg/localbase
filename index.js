const express = require('express');
const app = express();

app.use(express.json());

app.get('/oi', (req, res) => { res.send('oi'); });
app.listen(3000, () =>   console.log('Server is running on port 3000'));

//get http://localhost:3000/oi

let film = [
    {
        titulo: "",
        sinopse: "",
    },
    {
        titulo: "Titanic",
        sinopse: "O Titanic é um navio de passageiros que colidiu com um iceberg no Ocean Indiano na madrugada do dia 15 de abril de 1912, causando a morte de mais de 1,5 million de pessoas.",
        
    }
]