//Ejercicios 1-10
let miNombre = prompt("Ingresar Nombre")
let miApellido = prompt("Ingresar Apellido")
let miEdad = parseInt(prompt("Ingresar Edad"))
let miMascota = prompt("Ingresar Nombre de Mascota")
let edadMascota = parseInt(prompt("Ingresar Edad de Mascota"))
let nombreCompleto = miNombre + miApellido
let textoPresentacion = "miNombre: " + miNombre + " miApellido: " + miApellido + " miEdad: " + miEdad + " miMascota: " + miMascota + " edadMascota: " + edadMascota + " nombreCompleto: " + nombreCompleto
console.log(textoPresentacion)

let sumaEdades = miEdad + edadMascota
console.log("Suma edades: " + sumaEdades)

let restaEdades= miEdad - edadMascota
console.log("Resta edades: " + restaEdades)

let productoEdades= miEdad * edadMascota
console.log("Producto edades: " + productoEdades)

let divisionEdades= miEdad/  edadMascota
console.log("Division edades: " + divisionEdades)

//Ejercicio 11
let alumno = {
    nombre: "Jesus",
    apellido: "Suarez",
    edad: 22,
    altura: 175,
    genero: "Masculino"
}
console.table(alumno)
console.log("Nombre: " + alumno.nombre)
console.log("Apellido: " + alumno.apellido)
console.log("Edad: " + alumno.edad)
console.log("Altura: " + alumno.altura)
console.log("Genero: " + alumno.genero)

//Ejercicio 12
let mascota = {
    nombre: "Niño",
    dueño: "Jesus",
    edad: 14,
    raza: "Criollo",
    genero: "Masculino"
}
console.table(mascota)
console.log("Nombre: " + mascota.nombre)
console.log("Apellido: " + mascota.dueño)
console.log("Edad: " + mascota.edad)
console.log("Altura: " + mascota.raza)
console.log("Genero: " + mascota.genero)

//Ejercicio 13
let frutas = ["Mora", "Manzana", "Naranja", "Kiwi", "Pera"]
console.log("frutas: " + frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

//Ejercicio 14
let numeros14 = [20, 200, 2000, 20000, 200000]
console.log("Numeros: " + numeros14)
console.log(numeros14[0])
console.log(numeros14[1])
console.log(numeros14[2])
console.log(numeros14[3])
console.log(numeros14[4])

//Ejercicio 15
let familia = [
    {rol:"Mamá", Nombre:"Gloria"}, 
    {rol: "Papá", Nombre: "Rigo"}, 
    {rol: "Hermana1", Nombre: "Caro"}, 
    {rol: "Hermana2", Nombre: "Yeimi"}, 
    {rol: "Mascota", Nombre: "Niño"}
]
console.log(familia)
console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])

//Ejercicio 16
let textoAleatorio = frutas[1] + " " + numeros14[3]+ " " + familia[4].Nombre
console.log(textoAleatorio)

//Eercicio 17
let miEdad17 = prompt("Ingresa tu edad:");
let edadCompañero = prompt("Ingresa la edad de tu compañero:");
let edadesIguales = miEdad17 === edadCompañero;
let soyMayor = miEdad17 > edadCompañero;
let soyMenor = miEdad17 < edadCompañero;

console.log("Mi edad es igual a la de mi compañero: " + edadesIguales);
console.log("Mi edad es mayor a la de mi compañero: " + soyMayor);
console.log("Mi edad es menor a la de mi compañero: " + soyMenor);

//Ejercicio 18
let miEdad18 = parseInt(prompt("Ingresa tu edad:"));
let soyMayorDeEdad = miEdad18 > 18;

console.log("Soy mayor de edad: " + soyMayorDeEdad )

//Ejercicio 19
let edad19 = parseInt(prompt("Ingresa tu edad:"));
let altura19 = parseInt(prompt("Ingresa tu altura en centímetros:"));
let puedeSubir = edad19 > 6 && altura19 >= 120;
console.log("Puedes subir a la Atracción: "+ puedeSubir)

//Ejercicio 20
let pase = prompt("Ingrese su tipo de pase (VIP, NORMAL, LIMITADO)").toUpperCase()
console.log(pase)
let saldo = parseInt(prompt("Por favor Ingrese su saldo"))
let puedePasar = pase === "VIP" && saldo > 1000;
console.log("La persona puede pasar: " + puedePasar)