const execSync = require('child_process').execSync;

// console.log('code', code);

var dogs = {
  raining  : true,
  noise    : 'bark bark bark', //ES5
  // makeNoise: function ()  {
  //ES6
  makeNoise: () => {
    if (dogs.raining) {
      var noise = dogs.noise;
      execSync('say ' + noise);
    }
  }
};
// dogs.raining = false;
dogs.makeNoise();