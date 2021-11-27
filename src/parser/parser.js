/** 
* Parser for Tweets
* @version 1.0
*/


let Tweet = require('./Tweet');

/** numberOfTweetNotParsed count the number of tweet which fail to be parsed
  */
let numberOfTweetNotParsed = 0;

/** 
 * This function create an Tweet Object with one CSV line
 * @param {String} lineToParse one CSV line with 34 informations divided with :  ","
 * @return {Object} A tweet object if everything works; else increment numberOfTweetNotParsed and write 'Error for this Tweet'
 */
function ParseLineTweet(lineToParse) {
    // Every informations are stocked in the array data
    let data = lineToParse.split(/,(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/);
    // I check if the parser done well is job. If there is 34 line for the array.
    if(data.length == 34){
        // create an object tweet
        TweetParsed = new Tweet(data);
        return TweetParsed
    } else{
        numberOfTweetNotParsed++;
        return 'Error for this Tweet'
    }
}

/** 
 * This function create array of Tweets Objects with CSV lines
 * @param {String} linesToParse CSV lines divided with "/n"
 * @return {Array} Array of Tweet objects if all tweets are parsed
 */
function ParseAllLineTweet(linesToParse) {
    let arrayOfCsvLine = new Array;
    arrayOfCsvLine = linesToParse.split('\n');
    i=0;
    let arrayOfTweet = new Array;
    while(i <= arrayOfCsvLine.length-1){
        let Tweet = ParseLineTweet(arrayOfCsvLine[i]);
        if (Tweet != 'Error for this Tweet'){
            arrayOfTweet.push(Tweet);
        }
    i++;
    }
    return  arrayOfTweet      
}

/**
 * This function create array of Tweets Objects with CSV file
 * @param {String} PathOfTheFileToParse 
 * @return {Array} Array of Tweet objects if all tweets are parsed 
 */
function ParseCSVFileTweet(PathOfTheFileToParse) {
    let fs = require('fs');
    let readMe = fs.readFileSync(PathOfTheFileToParse,'utf8');
    arrayOfTweet = ParseAllLineTweet(readMe);
    return arrayOfTweet;
}

/** 
 * This function create array of All Tweets Objects Parsed with all CSV file
 * @param 
 * @return {Array} Array of all Tweet objects 
*/
function ParseCSVFilesTweet() {  
    var arrayOfFilesPath = ['./tweet-csv/Fri Mar 23/tweets.csv', './tweet-csv/Mon Mar 19/tweets.csv','./tweet-csv/Mon Mar 26/tweets.csv','./tweet-csv/Sat Mar 17/tweets.csv','./tweet-csv/Sat Mar 24/tweets.csv','./tweet-csv/Sun Mar 18/tweets.csv','./tweet-csv/Sun Mar 25/tweets.csv','./tweet-csv/Thu Mar 15/tweets.csv','./tweet-csv/Thu Mar 22/tweets.csv','./tweet-csv/Tue Mar 20/tweets.csv','./tweet-csv/Wed Mar 21/tweets.csv',];
    let j = 0;
    let arrayOfAllTweet = new Array;
    while(j <= arrayOfFilesPath.length-1){
         arrayOfAllTweet = arrayOfAllTweet.concat(ParseCSVFileTweet(arrayOfFilesPath[j]));
    j++;
    }
return arrayOfAllTweet;
}

module.exports.ParseCSVFilesTweet = ParseCSVFilesTweet;
/* Test for the parser
console.log(ParseCSVFilesTweet()[12].created_at);
console.log(numberOfTweetNotParsed);
 */