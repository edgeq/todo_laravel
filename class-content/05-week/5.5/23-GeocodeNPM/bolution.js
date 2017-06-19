
var bobLovesTheEarth = require('geocoder');


if (! process.argv[2] || process.argv.length > 3) {
  throw Error('Please input a quoted address');
}

bobLovesTheEarth.geocode(process.argv[2], function  (err, response){
  if (err) {
    throw err;
  }
  console.log(JSON.stringify(response, null, 4));
});

// Instructions:
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format. 

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)




// Take in the command line arguments




// Build your address as an array or string




// Then use Geocoder NPM to geocode the address
