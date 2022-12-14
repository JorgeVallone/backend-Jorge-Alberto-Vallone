const express = require('express');

const app = express()

//Configuracion para poder procesar informacion del cliente//
app.use(express.json())
app.use(express.urlencoded({extended: true }))
const PORT = 8070;

app.get('/api/mensajes', (req,res) =>{
    console.log('HTTP GET');
    //obtener data

    res.json({ msg: 'Hola mundo'})
})

//query params
app.get('/api/mensajes-query-params' , (req,res)=>{
    console.log('GET con QUERY PARAMS');

    if(Object.entries(req.query).length > 0){
        res.json({
            res:'get con query params ok',
            query: req.query
        })
    } else{
        res.json({
            result: 'no se envio info por query params'
        })
    }
})

//path params
app.get('/api/mensajes/:id', (req, res)=>{
    res.json({
        result:'recurso buscado',
        pathParams: req.params.id
    })
})


app.post('/api/mensajes', (req,res)=>{
    res.json(req.body)
})




app.listen(PORT, () =>{
    console.log('server OK');
})