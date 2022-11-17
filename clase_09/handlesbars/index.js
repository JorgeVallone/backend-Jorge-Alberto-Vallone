const express = require('express')
const handlesbars= require('express-handlesbars')

const app = express()


app.engine('hbs', 
    handlesbars({
extname:'.hbs',
defaultlayout:'index.hbs',
layoutsdir:__dirname + '/views/layouts', 
partialsDir:__dirname + '/views/partials'
}))

app.set('views engine', 'hbs')

app.set('views', './views')


fakeApi = () => [
    {name: 'Katarina' , lane: 'midlaner'}
]


app.get('/', (req, res)=>{
    res.render ('main', )
})



app.listen(8070, () =>{
    console.log('Server ok');
})