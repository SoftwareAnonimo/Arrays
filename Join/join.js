const elements = ["Fire", "Air", "Water"];

let rtaFinal = '';
const separetor = '--';
for (let index = 0; index < elements.length; index++) {
   const element = elements[index];
   rtaFinal = rtaFinal + element + separetor;
}

const rta = elements.join('--')
console.log('for', rtaFinal);
console.log('join', rta);

const title = 'Curso de manipulacion de Arrays';

const  urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal);