// const totals =[1,2,3,4];

let sum = 0
for (let index = 0; index < totals.length; index++) {
   const element = totals[index];
   sum = sum + element;
}
console.log(sum);

// const rta = totals.reduce((sum, element) => sum + element, 0)
// console.log('rta', rta); 

// const items = [ 1, 3, 2, 3 ];

// const rta = items.reduce((obj, item) => {
//    if(!obj[item]) {
//       obj[item] = 1;
//    } else {
//       obj[item] = obj[item] + 1;
//    }
//    return obj
// }, {})

// console.log(rta)

const data = [
   {
      name: 'Ricolas',
      level: "low",
   },
   {
      name: 'Zulema',
      level: "medium"
   },
   {
      customerName: 'Santiago',
      level: "hight"
   },
   {
      name: 'Valentina',
      level: "low"
   },
   {
      name: 'Lucia',
      level: "medium"
   },
   {
      name: 'Andrea',
      level: "hight"
   },
];

const rta2 = data
.map(item => item.level)
.reduce((obj, item) => {
   if(!obj[item]) {
      obj[item] = 1;
   } else {
      obj[item] = obj[item] + 1;
   }
   return obj
}, {});

console.log(rta2);