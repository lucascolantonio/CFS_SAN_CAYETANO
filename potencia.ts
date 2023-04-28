import * as rls from "readline-sync";
let base: number = rls.questionInt ("ingrese la baase")
let exponente: number = rls.questionInt("ingrese el exponente")
    while(exponente<=0){exponente=rls.questionInt("por favor el numero exponente debe ser mayor a 0 ")}
     if (exponente>=1){calcularpotencia}
function calcularpotencia(base, exponente){    
let potencia:number=base**exponente
return potencia
}
let resultado= calcularpotencia(base,exponente)
console.log("el resultado es:", resultado)
