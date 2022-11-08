const Contenedor = require('../desafioDos/productos.json')
const contenedorClass = new Contenedor("./productos.txt")

module.exports = productos = async () => {
    try {
        return await contenedorClass.getAll()
    } catch (error) {
        console.error(`Error en productos: ${error}`);
    }
}