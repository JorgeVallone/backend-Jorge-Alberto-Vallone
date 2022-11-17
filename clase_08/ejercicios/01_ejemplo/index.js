const { log } = require('console');
const express = require('express')
const { Router } = express;

const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))


const routerMascotas = new Router()
const routerPersonas = new Router()

//configuramos los routers

//mascotas
//almacenamos en memoria
const mascotas = []

routerMascotas.get('/', (req,res)=> {
    res.json({mascotas:mascotas})
})

routerMascotas.post('/', (req,res)=> {
    console.log("Ingrese la mascota");
    mascotas.push(req.body)
    res.json("Se guardo la mascota")
})


//personas

//ruta raiz
app.use('/mascotas', routerMascotas)
app.use('/personas', routerPersonas)


app.listen(8080, ()=>{
    console.log('Server OK');
})