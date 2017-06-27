var fs = require('fs');

function getBalance() {
  fs.readFile('bank.txt', 'utf8', function(err, data) {
    if (err) {
      throw err;
    }
    // console.log('dat', data);
    var bankArray = data.split(','),
      total = 0;

    bankArray.forEach(function (value) {
      // console.log('array value: ', parseFloat(value));
      total += parseFloat(value);
    });
    total = Math.floor(total * 100) / 100;
    console.log('total', total);
  });
}


var action = process.argv[2];
switch (action) {
  case 'balance':
    console.log('balance');
    getBalance();
    break;
  case 'withdraw':
    console.log('withdraw');
    break;
  case 'deposit':
    console.log('deposit');
    break;
  case 'help':
  case 'h':
  case '-h':
  default:
    console.log('No option specified. Please choose: ');
    console.log('deposit <amount>');
    console.log('withdraw <amount>');
    console.log('balance');
    break;
}
// console.log('action', action);