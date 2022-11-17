const express = require('express')
const { Router } = express;

const app = express()
const router = new Router()

//configuramos los routers
router.get('/productos', (req,res) => {
    res.send('ruta de productos')
})


router.get('/usuarios', (req,res) => {
    res.send('ruta de usuarios')
})



//ruta raiz
app.use('/api', router)



app.listen(8080, ()=>{
    console.log('Server OK');
})