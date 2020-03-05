/* const numero1="50",
    numero2=10,
    numero3="tres"; */

   // console.log(numero2+numero1)
//]Primera forma de convertir con Number
//console.log(Number(numero1)+numero2)

//Segunda forma de convertir
//console.log(parseInt(numero1)+numero2)

//conversion
//let dato= String([1,2,3])
//let dato=20
//dato=dato.toString()

//console.log(dato)
//console.log(dato.length)

/* const   producto="Pizza",
        precio1=30,
        producto2='hamburguezas'
        precio2=40;

let pagina; */
//vieja
    /* pagina= '<ul>'+
            "<li>Orden: "+ producto+"</li>"+
            "<li>Precio "+ precio1+"</li>"+
            '</ul>'

document.getElementById('publicar').innerHTML=pagina */

/* pagina=`

    <ul>
        <li>Orden:${producto} </li>
        <li>Precio:${precio1} </li>
        <li>Orden:${producto2} </li>
        <li>Precio:${precio2} </li>
        <li>Total: $ <strong> ${precio1+precio2} </strong> </li>
    </ul>
`
document.getElementById('publicar').innerHTML=pagina */

//crear un arreglo
//const numeros=[10,20,30,40,50];
//console.log(numeros)

//arreglos de strings

/* const meses=new Array('enero','febrero','marzo','abril')
meses.push('junio')
meses.unshift('mes 0')

meses.pop()
meses.shift()
meses.splice(1,1)
meses.reverse()
console.log(meses) */

//mesclado
//const mesclado=['hola',20,30,null, false,undefined]
//console.log(mesclado)

//console.log(Array.isArray(meses))

//encontrar algo en el arreglo

//console.log(meses.indexOf('abril'))

//unir dos arreglos
//console.log(numeros.concat(mesclado))

//Ordenar arreglos

/* const frutas=['platano','manzana','fresa','naranja']
frutas.sort();
console.log(frutas);

let arreglo1=[3,45,6,8,99,23,5,675,7,9,7,10]
arreglo1.sort(function(x,y){
    return(x-y)
});
console.log(arreglo1) */

//arreglos y sustituciones

/* const numeros=[1,2,3]
numeros[0]=4
numeros.push(5)

console.log(numeros) */

//objetos
/* 
const persona={
    nombre:'Carlos',
    apellido:'Mendoza',
    profesion:'Developer',
    email:'correo@correo.com',
    edad:28,
    musica:['trance','Rock'],
    hogar:{
        ciudad:'hidalgo',
        pais:'Mexico',
        domiciolio:{
            cp:42080,
            calle:'centro'
        }
    },
    nacimiento:function(){
        return new Date().getFullYear() -this.edad
    }
}


console.log(persona.nacimiento()) */
/* 
const autos=[
    {modelo:'mustang',motor:6.1},
    {modelo:'camaro',motor:7.2},
    {modelo:'tsuru',motor:1.6},
]

for(let i=0; i<autos.length; i++){
    console.log(autos[i])
} */


//Funciones

/* function saludar(nombre){
    console.log(`Hola ${nombre}`)
}

saludar("carlos")
saludar("fernando") */


/* function sumar(a,b){
    return a+b
}

sumar(1,2) */


//la forma vieja
/* function saludar(nombre){
    if(typeof nombre==='undefined'){
        nombre='visitate'
    }
    return `Hola ${nombre}`
}

console.log(saludar()) */

//la forma nueva
/* function saludar(nombre='visitante'){
    
    return `Hola ${nombre}`
}

console.log(saludar("carlos")) */

//function expression
/* const suma= function(a,b){
    return a+b
}

console.log(suma(1,2))
console.log(suma(5,11)) */

// IIFE funciones que se crean y se imbocan inmediatamente
/* (function(){
console.log('creado un IIFE')
})(); */

//otra IIFE
/* (function(tecnologia='JavaScript'){
    console.log(`Aprendiendo ${tecnologia}`)
})('node'); */

//metodos de propiedad
//cuando una funcion se pone dentro de un objeto, a las funciones se les lama metodo

/* const musica={
    reproducir:function(id='ERROR sin ID'){
        console.log(`Reproduciendo canción ${id}`)
    },
    pausar:function(id='ERROR sin ID'){
        console.log(`pausar la cancion ${id}` )
    }
}

musica.pausar(20)
musica.reproducir(30) */

//los metodos tambia pueden guardarse fuera del objeto

/* musica.borrar=function(id="Error sin ID"){
    console.log(`Borrando la cancion ${id}`)
}
musica.borrar(45) */

//Manejo de Errores
/* 
try{
    //funcion que no existe
    algo()
}catch(error){
    console.log(error)
}finally{
    //no le importa y ejecuta el codigo
    console.log("no le importa")
}

obteneClientes()
function obteneClientes(){
    console.log('Descargando ...');

    setTimeout(function(){
        console.log('completo !!')
    },3000)
} */

//Fechas en JavaScript
//En javascript existe un objeto llamado Date
/* 
const diaHoy=new Date();
let cumple=new Date('12-17-1992');
console.log('Hoy es '+diaHoy)
console.log('El cumple fue '+cumple)

let mes,dia,year,hora,minutos,milisegundos,naciyear;
mes=diaHoy.getMonth()
dia=diaHoy.getDay()
year=diaHoy.getFullYear()
hora=diaHoy.getHours()
minutos=diaHoy.getMinutes()
milisegundos=diaHoy.getTime()
naciyear=diaHoy.setFullYear(1992)
naciyear=diaHoy.getFullYear()

console.log('El mes actual es: '+mes)
console.log('Día actual: '+dia)
console.log('El año es: '+year)
console.log('La hora es: '+hora+' minutos: '+minutos)
console.log('milisegundos desde 1970: '+milisegundos)
console.log('Modelo: '+naciyear) */

//Estructuras de control
/* const edad=18;
if(edad>18){
    console.log('si puedes entrar al sitio')
}else{
    console.log('No puedes entrar al sitio')
} */

//comprobar que la variale tiene un valor

/* let puntaje=1000;

if(puntaje !=undefined){
    console.log(`El puntaje fue de ${puntaje}`)
}else{
    console.log(`No hay puntaje`)
} */

/* let efectivo = 400;
let totalCarrito=300;

if(efectivo>totalCarrito){
    console.log('Sucsess')
}else {
    console.log('Fondos Insuficientes')
} */

//else if

/* let hora=25;
if(hora<=11&&hora>=0){
    console.log('Buenos dias')
}else if(hora<=16){
    console.log('Buenas tardes')
}else if(hora<=24){
    console.log('Buenas noches')
}else{
    console.log('error valedor')
} */
/* 
let efectivo=200
let credito=200
let totalCarrito=600

let poder=credito+efectivo

if(efectivo<totalCarrito&&credito<totalCarrito&&poder<totalCarrito){
    console.log('no te alcanza')
}else if(efectivo>=totalCarrito||credito>=totalCarrito||poder>=totalCarrito){
    if(efectivo>=totalCarrito&&credito>=totalCarrito){
        console.log('te cobro con efectivo o por credito')
    }else if(efectivo>=totalCarrito){
        console.log('te cobro con efectivo')
    }else if(credito>=totalCarrito){
        console.log('te cobro con credito')
    }else if(poder>=totalCarrito){
        console.log('te cobro juntando ambos')
    } 
} */

//Ternario

/* const logueado=true;
console.log( logueado===true ?'si se logueo':'No se logueo') */


//swich

/* const metodoPago='bitcoin'
switch(metodoPago){
    case 'efectivo':
        console.log(`El usuario pago con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`el usuario pago con ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`El usuario pago con ${metodoPago}`);
        break;
    default:
        console.log('Metodo de pago no soportado');
        break;
} */
/* 
let fecha=new Date()
switch(fecha.getMonth()){
    case 0:
        mes='Enero';
        break;
    case 1:
        mes='Febrero';
        break;
    case 2:
        mes='Marzo';
        break;
    case 3:
        mes='Abril';
        break;
    case 4:
        mes='Mayo';
        break;
    case 5:
        mes='Junio';
        break;
    case 6:
        mes='Julio';
        break;
    case 7:
        mes='Agosto';
        break;
    case 8:
        mes='Septiembre';
        break;
    case 9:
        mes='Octubre';
        break;
    case 10:
        mes='Noviembre';
        break;
    case 11:
        mes='Diciembre';
        break;
    default:
        mes='Error algo esta mal'
        break;
}
console.log(mes) */

//for loop

/* for(let i=0; i < 100;i++){
    if(i==5){
        console.log(`voy  en el ${i}`)
        continue
    }
    console.log(`${i}`)
} */


/* for(let i=0; i < 100;i++){
    if(i%2==0){
        console.log(`El numero ${i} es Par`)
    }else{
        console.log(`El numero ${i} es inpar`)
    }
} */

/* const arregloProductos=['Camisa','Boleto','Guitarra','Disco'];
console.log(arregloProductos.length)

for(i=0; i<arregloProductos.length; i++){
    console.log(`Tu producto ${arregloProductos[i]} fue agregado`)
} */

//while

/* let i=0;
while(i<10){
    console.log(`numero: ${i}`)
    i++;
} */

/* let i=0;
while(i<10){
    if(i===5){
        console.log('Cinco jaja');
        i++;
        continue;
    }
    console.log(`numero: ${i}`)
    i++;
} */

/* const musica=['Cancion 1', 'Cancion 2', 'Cancion 3'];

let i=0;
while(i < musica.length){
    console.log(`Reproduciendo la canción ${musica[i]}`)
    i++;
} */

/* let i=0;
do{
console.log(`Numero ${i}`)
i++;
}while(i<10) */

//entendiendo forEach
/* const pendientes=['Tarea','Comer','Proyecto','Aprender','Javascript']

for(i=0; i<pendientes.length; i++){
    console.log(pendientes[i])
}
console.log(pendientes) */

//ahora si el forEach

/* const pendientes=['Tarea','Comer','Proyecto','Aprender Javascript']

pendientes.forEach(function(pendientes,index){
    console.log(`${index} : ${pendientes}`)
}) */

//map para recorrer un arreglo de objetos

/* const carrito=[
    {id:1, producto: "Libro"},
    {id:2, producto: "Lampara"},
    {id:3, producto: "Lupa"},
    {id:4, producto: "Lentes"},
]
const nombreProducto=carrito.map(function(carrito){
    return carrito.producto;
})

console.log(carrito) //El arreglo
console.log(nombreProducto) //el resultado del map
 */

 // lo que recorre son las llaves y los valores

/* const automovil={
    modelo:"camaro",
    motor:6.1,
    year:1986,
    marca:'Chevrolet'
}

for(let auto in automovil){
    console.log(`${auto}: ${automovil[auto]}`)
}

console.log(automovil) */

//itersadores
/* const ciudades=['londres','New York', 'Madrid', 'Paris']
const ordenes= new Set([123,231,131,102]);

const datos= new Map();
datos.set('nombre','Carlos');
datos.set('profesion','developer'); */

/* console.log(ciudades);
console.log(ordenes);
console.log(datos); */

//Entries iterador
//entris a las ciudades
//for(let entrada of ciudades.entries()){
//    console.log(entrada)
//}

//Entradas para las ordenes
//for(let entradas of ordenes.entries()){
//    console.log(entradas)
//}

//entries para el MAP
//for(let entrada of datos.entries()){
//    console.log(entrada)
//}


//values iterador

/* for(let entrada of ciudades.values()){
    console.log(entrada)
} */

//for(let entradas of ordenes.values()){
//    console.log(entradas)
//}

//for(let entrada of datos.values()){
//    console.log(entrada)
//}



//keys iterador


/* for(let entrada of ciudades.keys ()){
    console.log(entrada)
} */

/* for(let entradas of ordenes.keys()){
    console.log(entradas)
} */

/* for(let entrada of datos.keys()){
    console.log(entrada)
} */

//iteradores default

/* for(let entrada of ciudades){
    console.log(entrada)
} */

/* for(let entradas of ordenes){
    console.log(entradas)
} */

/* for(let entrada of datos){
    console.log(entrada)
} */

//iteradores de string

//vieja forma
//const mensaje='aprendiendo Javascdript'

/* for (let i=0; i<mensaje.length; i++){
    console.log(mensaje[i])
} */

//nueva 

/* for(let letra of mensaje){
    console.log(letra)
} */

/* const enlaces= document.getElementsByTagName('a');

for(let enlace of enlaces){
    console.log(enlace)
} */

// windows object
//const nombre=prompt()
//console.log(`Bienvenido ${nombre}`)
//confirm 

/* if(confirm('eliminar ?')){
    console.log('eliminado');
}else{
    console.log('no paso nada')
} */

//let altura,
  //  anchura;

    /* altura=window.outerHeight;
    anchura=window.outerWidth; */

 //   altura=window.innerHeight;
 //   anchura=window.innerWidth;

 //   console.log(altura);
 //   console.log(anchura);

 /* 
 let ubicacion;
 ubicacion=window.location;
 console.log(ubicacion) */
 
 //window.location.href='https://twitter.com'

//navigator
/* ubicacion=window.navigator;

console.log(ubicacion) */

//scope

/* var a='a';
let b="b";
const c="c";

function funcionScope(){
    var a='A';
    let b='B';
    const c='C';
    console.log('Funcion: '+a,b,c)
}
funcionScope()
if(true){
    var a='AA';
    let b='BB';
    const c='CC';
    console.log('Bloque: '+a,b,c) 
}
for(var a=0; a<10; a++){
    console.log(a)
}

console.log('GLOBALES: '+a,b,c); */