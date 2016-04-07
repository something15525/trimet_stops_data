var fs = require('fs');
var objectToParse = JSON.parse(fs.readFileSync('stops.json', 'utf8'));

var locationData = objectToParse.resultSet.location;
var finishedObject = {};

// Save unparsed results
var resultsUnparsed = locationData;

finishedObject.results = [];

resultsUnparsed.forEach(function(result) {
  // Make sure stop isn't a shuttle.
  if (result.desc.indexOf("Shuttle") == -1) {
    // Add canonical lowercase version of stop description
    result.descLower = result.desc.toLowerCase();

    // Add to results array
    finishedObject.results.push(result);
  }
});

// Remove array and save
finishedArray = finishedObject.results;

fs.writeFileSync('./stops_parsed.json', JSON.stringify(finishedArray, null, 4));

console.log('There are ' + finishedArray.length + ' items in the array');
