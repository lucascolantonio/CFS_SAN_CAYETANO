import * as rls from "readline-sync";
let numeroingresado:number=rls.questionInt("ingrese el numero a multiplicar:")
let numerolimite :number=rls.questionInt("ingrese el numero limite de la multiplicacion:")
for (let contador:number=1; contador<=numerolimite; contador++){
    console.log(numeroingresado, "x", contador, "=",(numeroingresado*contador))}