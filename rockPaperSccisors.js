//7. Realice un algoritmo que realice el popular juego: Piedra,Papel,Tijera.
let pc;
let cpu;
let user;
let turno;
let result;

function numAleatorio(min, max){
   return Math.random()*(max-min)+min;
}

pc=Math.floor(numAleatorio(1,4));


if (pc == 1){
    cpu="piedra";
}
if (pc == 2){
    cpu="papel";
}
if (pc == 3){
    cpu="tijera";
} 

turno = parseInt(prompt("Elija una opción \n 1.piedra \n 2.papel \n 3.tijera "));


if(turno == 1) {
    user="piedra";
}
if (turno == 2){
    user="papel";
}
if (turno == 3){
    user="tijera";
} 


console.log("la maquina saco "+ cpu); 
console.log("El usuario saco" +user);

if (cpu == "piedra" && user == "piedra"){
    result = "empate";
}else if (cpu == "piedra" && user == "papel"){
    result = "Gana el usuario";
}else if (cpu == "piedra" && user == "tijera"){
    result = "Gana la maquina";
}else if (cpu == "papel" && user == "papel"){
    result = "empate";
}else if (cpu == "papel" && user == "piedra"){
    result = "Gana la maquina";
}else if (cpu == "papel" && user == "tijera"){
    result = "Gana el usuario";
}else if (cpu == "tijera" && user == "tijera"){
    result = "Empate";
}else if (cpu == "tijera" && user == "papel"){
    result = "Gana la maquina";
}else if (cpu == "tijera" && user == "piedra"){
    result = "Gana el usuario";
} 

console.log(result);
