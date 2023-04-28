import * as rls from "readline-sync";
function divisores(num: number): void {
    let divisores = "";
  
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        divisores += i + ", ";}

    }
console.log("los divisores de", num, "son", divisores)
}
    let numeroingresdo:number=rls.questionInt("ingrese un numero")
divisores(numeroingresdo)