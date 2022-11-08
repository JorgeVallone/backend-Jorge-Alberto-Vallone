//calback//

const ejecutar = unauncion => unauncion()
const saludar = () => console.log(`Saludos`)
ejecutar(saludar)


let saludame = saludo => saludo()
let che = () => console.log("que hace");
saludame(che)

let materiales = mater => mater()
let calco = () => console.log("material");
materiales(calco)

// cuando le paso un parametro a la funcion callback//

let nombre = (apellido , app) => apellido(app);
let na = castor => console.log(`Gran hermano . ${castor}`);
nombre(na, "AXel Rose")

/* function myCalculator(num1,num2){
    let sum = num1 + num2;
    let myCallback =console.log(sum);
}
myCalculator(5,5, myCallback) */

function procesarDatosyLoger(text, callbackParaLogear){
    console.log(text);

    callbackParaLogear(`archivo procesado con exito`)
}
procesarDatosyLoger(`hola estoy usando callback`, (mensaje)=> {
    const fecha = new Date().toLocaleDateString();
    console.log(`${fecha} : ${mensaje}`);
})