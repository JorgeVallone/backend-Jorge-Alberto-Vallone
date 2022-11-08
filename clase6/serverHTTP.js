const http = require('http')



const server = http.createServer((peticion, respuesta) => {
    respuesta.end(`Hola desde el back`)
})

const connectedServer = server.listen(8080, () => {
    console.log(`server http escuchando en el puerto 8080`);
})