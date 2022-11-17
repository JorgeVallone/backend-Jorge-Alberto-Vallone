const express = require('express');

const app = express();

//Configuracion para poder procesar informacion del cliente
app.use(express.json())
app.use(express.urlencoded({exprended: true }))
const PORT=8070;

const palabras = ['frase' , 'inicial']


//Configuracion de endpoints


// 1) '/api/frase' -> devuelve la frase en forma completa en un campo 'frase'.
app.get('/api/frase', (req, res) => {
    res.send({frase: palabras.join(' ')})
})


//2) '/api/palabras/;num' -> devuelve por número de orden la palabra dentro de esa frase (num1 refiere a la primera palabra), en un campo 'palabra'.
app.get('/api/palabras/:pos', (req,res) => {
    //hacemos una destructuracion
    const { pos } = req.params

    res.send({busqueda: palabras[parseInt(pos) - 1 ]})

})



//post
app.post('/api/palabras', (req,res) => {
    //info viene de postman, entonces se captura con .body
    const {palabra} = req.body
    palabras.push(palabra)

    res.send({status:'Palabra agregada en forma exitosa!!'})
})


//Put
app.put('/api/palabras/:pos', (req,res)=>{
    const {palabra} = req.body
    const {pos} = req.params

    const palabraAnterior = palabras [parseInt(pos) -1 ]
    palabras[parseInt(pos)-1] = palabra
    res.send({actualizada: palabra, anterior:palabraAnterior})
})


//Delete
app.delete('/api/palabras/:pos', (req,res)=> {
    const {pos} = req.params
    const palabra = palabras.slice(parseInt(pos)-1,1)
    res.send({palabra: palabra})
})

app.listen(PORT, ()=>{
    console.log(`Server run on PORT: ${PORT}`);
})