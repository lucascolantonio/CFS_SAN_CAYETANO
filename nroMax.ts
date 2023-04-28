import * as rls from "readline-sync";
let numMax: number;
let numMin: number;
let contTotal: number = 2;
let suma: number = 0;
let promedio: number = 0;
let n1: number = rls.questionFloat("Ingrear numero: ");
 if (n1 !== 0) {
    suma = n1; 
    let n2: number = rls.questionFloat("ingrear numero: ");
    if (n2 !== 0) {
        suma += n2;
        promedio = suma/2;
        
        if( n1 > n2 ){ 
        numMax = n1;
        numMin = n2;
        }
        else  {        
        numMax = n2;
        numMin = n1;
        }
        let nn: number = 1;
        
        while ( nn !== 0 ) {
        
            nn = rls.questionFloat("Ingrese numero: ");
            if ( numMax < nn && nn !== 0) numMax = nn; 
            if ( numMin > nn && nn !== 0) numMin = nn; 
            if (nn !==0) {
                suma += nn;
                contTotal += 1;
                promedio = suma/contTotal;
            }
        }    
       
        console.log(`${numMax} es el máximo. ${numMin} es el mínimo. ${promedio} es el promedio.`);
        
    } else console.log(`${n1} es el máximo. ${n1} es el mínimo. ${n1} es el promedio.`);
}