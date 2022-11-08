const express = require('express');
const app = express();
const port = 8080;

let visitas = 0;

app.get('/', (req, res) => {
    res.send('<h1 style="color: blue;">Bienvenidos al servidor express</h1>');
});

app.get('/visitas', (req, res) => {
    visitas++;
    res.send(`La cantidad de visitas es ${visitas}`);
});

app.get('/fyh', (req, res) => {
    const date = new Date();
    res.send({ fyh: date.toLocaleString() });
});

const server = app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

server.on('error', error => console.log(`Error en servidor ${error}`));
