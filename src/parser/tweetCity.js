var tweet = require('./tweet.js');
const parser = require('./parser.js');
const program = require('caporal');
const fs = require("fs");


/*

  Creates an array that contains the list of all places
  where the tweets were tweeted

*/

exports.module = require('caporal')
    .command('tweetCity', 'Displays the number of tweet per city')
    
    .action(function (args, options, logger){

function tweetCity(){
    let i = 1;
    let j = 1

    let ParseCSVFilesTweet = new Array;
    ParseCSVFilesTweet = parser.ParseCSVFilesTweet();

    let arrayTweetCity = new Array;
    while(i <= ParseCSVFilesTweet.length-1){
      if(ParseCSVFilesTweet[i].place != ''){
          arrayTweetCity.push(ParseCSVFilesTweet[i].place);
      }
        i++;
    }
    return arrayTweetCity ;
}


    let arrayTweetCity2 = new Array;
    arrayTweetCity2 = tweetCity();


/*

Creates a new array that contains the list of the cities where
the tweets were tweetted, cleaned of all double entries

*/

  function cleanArray(array) {
      var i, j, len = array.length, out = [], obj = {};
      for (i = 0; i < len; i++) {
        obj[array[i]] = 0;
      }
      for (j in obj) {
        out.push(j);
      }
      return out;
    }

    let arrayCities = new Array;
    arrayCities = cleanArray(arrayTweetCity2);


/*

Counts of tweets for every city by comparing the array that contains
the list of all the cities and the array that contains the cities taken
just one time

*/

    function countTweetsInCity() {
     let c1 = 0;
     let c2 = 0;
      let arrayCount = new Array;
      for (var i=0; i<= arrayCities.length-1; i++ ){
        arrayCount[i] = 0;
      }



     while(c1 <= arrayCities.length-1){
        while(c2 <= arrayTweetCity2.length-1){
          if (arrayTweetCity2[c2] == arrayCities[c1]){
            arrayCount[c1]++;
          }

          c2++;
        }
        c2=0;
        c1++;

      }
      return arrayCount;
    }

    let arrayCount = new Array;
    arrayCount = countTweetsInCity();


/*

Presents the count of tweets tweeted in a city and the name
of the city by creating a double-entry array

*/
fs.appendFile('tweetCity.txt', ' \t \t \t --Tweet City-- ' ,function (err) {
    if (err) throw err;
}); 

let arrayPresentation = new Array(arrayCities,arrayCount);

for(var i=0; i <= arrayCities.length-1; i++){
  logger.info(arrayPresentation[0][i]+ " " +arrayPresentation[1][i]);
  fs.appendFile('tweetCity.txt', arrayPresentation[0][i]+ " " +arrayPresentation[1][i] ,function (err) {
    if (err) throw err;
}); 
}

    });

    program.parse(process.argv); 