import * as rls from "readline-sync";
let cantDados:number=rls.questionInt("ingrese el numero de dados:")
const posibilidades1:number=6
let posibilidades:number=0
posibilidades=posibilidades1**cantDados
 if (cantDados>1){console.log("usted tiene", 1/posibilidades, "posibilidades")}
    else {console.log("usted tiene ", 1/posibilidades1, "posibilidades")}