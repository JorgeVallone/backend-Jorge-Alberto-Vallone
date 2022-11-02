//ejemplo de ejercicio
/* const persona = [
    {
        nombre:"Dario",
        edad: 29
    },
    {
        nombre:"Pancho",
        edad: 25
    },
    {
        nombre:"Julio",
        edad: 39
    },

]
const nombrePersonas = persona.map(persona => {
    return persona.nombre
})
console.log(nombrePersonas);
console.log("Hiak") */

//-----Objeto Ejemplo-------//
const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

//get nombres//
function getNombres (productos){
    const nombres = productos.map(producto => producto.nombre)
    return nombres.join(',');
}

//precio total
function precioTotal (producto){
    let total = 0;
    
    for (const producto of producto){
        total += producto.precio;
    }
    total = parseFloat(total.toFixed(2))
    return total;
}

//obtener el promedio//
function getPrecioPromedio(producto){
    if(productos.length === 0){
        throw new Error("no se puede calcular porque el array esta vacio");
    }
    return getPrecioTotal(productos) / productos.length
} 

//producto minimo//
