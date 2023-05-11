import * as rls from "readline-sync";
let base: number = rls.questionInt ("ingrese la baase")
let exponente: number = rls.questionInt("ingrese el exponente")
 let resultado: number=0
while(exponente< 0){exponente=rls.questionInt("por favor el numero exponente debe ser mayor a 0 ")}
     if (exponente>0){calcularpotencia(base, exponente)}
     else (exponente ===0);{resultado= 1 }
function calcularpotencia(base: number, exponente: number):number{    
let potencia:number=base**exponente
return potencia
}
 resultado= calcularpotencia(base,exponente)
console.log("el resultado es:", resultado)