// const numbers = [1,30,39,29,10,13];

// let rta = true;
// for (let index = 0; index < numbers.length; index++) {
//    const element = numbers[index];
//    if(element >= 40) {
//       rta = false
//    }
// }

// console.log('For', rta);
// const rta2 = numbers.every(item => item <= 40);
// console.log('rta2', rta2);

const team = [
   {
     name: "Nicolas",
     age: 20,
   },
   {
     name: "Andrea",
     age: 17,
   },
   {
     name: "Zulema",
     age: 18,
   },
   {
     name: "Santiago",
     age: 16,
   },
 ];

 const rta3 = team.map(jugador => jugador.age)
 .every(edad => edad >= 15);

 const respuesta = (rta3 === true) ? "Equipo admitido" : "Todos tus jugadore deben ser mayores de 15";

 console.log(respuesta)