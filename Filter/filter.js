const words = ['spray', 'limit', 'elite', 'exuberant'];

const newArray = []
for (let index = 0; index < words.length; index++) {
   const item = words[index];
   if(item.length >= 6) {
      newArray.push(item);
   }
}
console.log('NewArray', newArray);
console.log('Original', words);
const rta = words.filter(item => item.length >= 6)
console.log('rta', rta);
console.log('Original', words);


const orders = [
   {
      customerName: 'Nicolas de las Casas',
      total: 60,
      delivered: true,
   },
   {
      customerName: 'Zulema con Z',
      total: 120,
      delivered: false,
   },
   {
      customerName: 'Santiago Ormeño',
      total: 180,
      delivered: true,
   },
   {
      customerName: 'Valentina',
      total: 240,
      delivered: true,
   },
   {
      customerName: 'Nicola Porcella',
      total: 300,
      delivered: true,
   },
];
const rta3 = orders.filter(item => item.delivered && item.total >= 100)
console.log('rta3', rta3);

const search = (query) => {
   return orders.filter(item => {
      return item.customerName.includes(query);
   })
}

console.log(search('jghrndyh'));