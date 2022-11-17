const express = require('express')
const {promises: fs} = require('fs')
const app = express()



app.engine('ntl', async(filePath, options, callback) =>{

    try {
        const content = await fs.readFile(filePath)
        const render = content.toString().replace('#title#', '' + options.title).replace('#message#', ' '+ options.message + '')
        return callback(null, render)

    } catch (error) {
       return callback(new Error(error)) 
    }
})

app.set('views' , './views')
app.set('views engine', 'ntl')

app.get('/' , (req,res)=>{
    const datos = {
        title: 'Customs template',
        message: 'Customs template'
    }

    res.render('index', datos)
})


app.listen(8070),  () =>{
console.log('server ok');
}