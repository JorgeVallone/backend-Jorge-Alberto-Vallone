/* class Usuario {
    constructor(nombre, apellido){  
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }
    
    //Nombre y apellido completo//

    getFullName = () => {
        return(`Hola, mi nombre es ${this.nombre} ${this.apellido}`) 
    };

    //Agrego mascotas al array//
    addMascota = (nombre) => {
        this.mascotas.push({nombre})
    };


    countMascotas = () =>{
        return (`La cantidad de mascotas son: ${this.mascotas.length}`)
    };


    addBook = (nombre, autor) =>{
        this.libros.push({nombre, autor})
    };


    getBookNames = () =>{
        return this.libros.map((libro) => {
            return libro.nombre})
    };
}


let usuario1 = new Usuario("Jorge", "Vallone")


usuario1.addMascota("Perro")   
usuario1.addMascota("Gato") 
usuario1.addMascota("Tortuga")   
usuario1.addMascota("Conejo")     
usuario1.addBook("El demonio y la señorita Prymd","Paulo Coelho")
usuario1.addBook("El jorobadito","Roberto Arlt")
usuario1.addBook("El equlibrista","Federico Andahazi")
usuario1.addBook("Harry Potter","J.K Rowling")


console.log(usuario1.getFullName())    
console.log(usuario1.countMascotas())    
console.log(usuario1.getBookNames())    
 */


// practica

//desafio 2//
const Conteiner = require("./clase.js")
const productos = new Conteiner("./productos.json")

async function ejecutar(){

    const objeto3={
        nombre:"empanada jamon y q",
        precio:320,
        thumbnail:"url"
    }
    const objeto2={
        nombre:"empanada de carne",
        precio:324,
        thumbnail:"url"
    }
    const objeto1={
        nombre:"pizza",
        precio:300,
        thumbnail:"url"
    }
    /* await productos.getAll().then(a=>console.log(a)) */
    
    /* await productos.deleteAll() */

  /*   await productos.save(objeto1)
    await productos.save(objeto2)   */ 

     await productos.deleteById(2).then(id=>console.log(id))
}
ejecutar()