const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months)
const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a,b) => b -a);
console.log(numbers);
const words = ['reserve', 'premier', 'communique', 'cafe', 'adieu', 'eclair', 'banana'];
words.sort((a,b) => a.localeCompare(b));
console.log(words);

const orders = [
   {
      customerName: "Nicolas",
      total: 600,
      date: "Jan",
      delivered: true,
   },
   {
      customerName: "Zulema",
      total: 120,
      date: "Feb",
      delivered: false,
   },
   {
      customerName: "Santiago",
      total: 1840,
      date: "Dec",
      delivered: true,
   },
   {
      customerName: "Valentina",
      total: 240,
      date: "March",
      delivered: true,
   },
];
orders.sort((a,b) => b.date - a.date);
console.log(orders);