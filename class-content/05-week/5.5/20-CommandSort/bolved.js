console.log('hello world!')
//RUN ME LIKE THIS
//node sorter.js 1 5 17 2 2332 9
//node sorter.js 5 17

let numbers = [];

for (let i = 2; i < process.argv.length; i++) {
  numbers.push(parseInt(process.argv[i]));
}

numbers.sort((a, b) => {
  return (a - b);
});
// console.log('i', i);
console.log('numbers', numbers);