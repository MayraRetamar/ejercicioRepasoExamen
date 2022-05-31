/*Una materia de la carrera de Ingeniería de Sistemas tiene 30 alumnos, 
divididos en 3 comisiones. 
Estos arreglos contienen las notas finales de los alumnos en cada comisión :  
comisionA = [8, 5, 7, 10, 9, 2, 4, 8, 6, 8]  
comisionB = [3, 6, 8, 5, 4, 7, 7, 4, 6, 8]  
comisionC = [7, 6, 9, 8, 9, 8, 5, 7, 10, 9] 

2. Crear una función que devuelva el menor promedio y a qué comisión corresponde. 
3. Teniendo en cuenta que la materia se aprueba con 6, crear una función que devuelva 
la cantidad de desaprobados en una comisión, mostrar el resultado para cada comisión 
4. Crear una función que devuelva la menor nota de una comisión, mostrar el resultado 
para cada comisión.*/

let comisionA: number[] = new Array(10);
let indice: number = 0;
comisionA[0] = 8;
comisionA[1] = 5;
comisionA[2] = 7;
comisionA[3] = 10;
comisionA[4] = 9;
comisionA[5] = 2;
comisionA[6] = 4;
comisionA[7] = 8;
comisionA[8] = 6;
comisionA[9] = 8;

let comisionB: number[] = new Array(10);
let indice: number = 0;
comisionB[0] = 3;
comisionB[1] = 6;
comisionB[2] = 8;
comisionB[3] = 5;
comisionB[4] = 4;
comisionB[5] = 7;
comisionB[6] = 7;
comisionB[7] = 4;
comisionB[8] = 6;
comisionB[9] = 8;

let comisionC: number[] = new Array(10);
let indice: number = 0;
comisionC[0] = 7;
comisionC[1] = 6;
comisionC[2] = 9;
comisionC[3] = 8;
comisionC[4] = 9;
comisionC[5] = 8;
comisionC[6] = 5;
comisionC[7] = 7;
comisionC[8] = 10;
comisionC[9] = 9;

/*1. Crear una función que devuelva el mayor promedio y 
  a qué comisión corresponde.*/

let calcularPromedio = (arreglo: number[], cantidad: number): number => {
  let suma: number = 0;
  let promedio: number;
  for (indice = 0; indice < cantidad; indice++) {
    suma = suma + arreglo[indice];
  }
  promedio = suma / cantidad;

  return promedio;
};

let promedio1 = calcularPromedio(comisionA, 10);
let promedio2 = calcularPromedio(comisionB, 10);
let promedio3 = calcularPromedio(comisionC, 10);

console.log(
  "El promedio de las comision A es " + calcularPromedio(comisionA, 10)
);
console.log(
  " El promedio de la comision B es " + calcularPromedio(comisionB, 10)
);
console.log(
  " El promedio de la comision C es " + calcularPromedio(comisionC, 10)
);

let devolverMayorPromedio = (
  promedioA: number,
  promedioB: number,
  promedioC: number
): number => {
  let mayor: number;
  if (promedioA > promedioB && promedioA > promedioC) {
    mayor = promedioA;
  } else if (promedioB > promedioA && promedioB > promedioC) {
    mayor = promedioB;
  } else {
    mayor = promedioC;
  }
  return mayor;
};

devolverMayorPromedio(promedio1, promedio2, promedio3);

console.log(
  "El mayor promedio es " +
    devolverMayorPromedio(promedio1, promedio2, promedio3)
);
