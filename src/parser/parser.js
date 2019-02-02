

let Tweet = require('./Tweet');

// let str for test ParseAllLineTweet only
let str = `,Mon Mar 19 11:19:46 +0000 2018,,,,0,975693308210155521,,,,en,,,77,975041617684934656,BergisJules,"<a href=""http://twitter.com/download/iphone"" rel=""nofollow"">Twitter for iPhone</a>","RT @BergisJules: On March 22nd-24th, 2018 @documentnow and @rhizome/@webrecorder_io will host Ethics and Archiving the Web in NYC. I hope y‚Ä¶",https://twitter.com/ModupeLabode/status/975693308210155521,Fri Mar 22 15:35:27 +0000 2013,ModupeLabode,false,Historian. Museumist. Diasporan. Midwesterner. In search of the next good read.,23854,1550,1385,91,Indianapolis,Modupe Labode,ModupeLabode,9813,,,false
Good,Mon Mar 19 11:19:46 +0000 2018,,,,0,975693308210155521,,,,en,,,77,975041617684934656,BergisJules,"<a href=""http://twitter.com/download/iphone"" rel=""nofollow"">Twitter for iPhone</a>","RT @BergisJules: On March 22nd-24th, 2018 @documentnow and @rhizome/@webrecorder_io will host Ethics and Archiving the Web in NYC. I hope y‚Ä¶",https://twitter.com/ModupeLabode/status/975693308210155521,Fri Mar 22 15:35:27 +0000 2013,ModupeLabode,false,Historian. Museumist. Diasporan. Midwesterner. In search of the next good read.,23854,1550,1385,91,Indianapolis,Modupe Labode,ModupeLabode,9813,,,true
,Mon Mar 26 18:23:05 +0000 2018,,,,1,978336554446938118,phonedude_mln,978308786892009500,151901549,en,,,0,,,"<a href=""http://twitter.com"" rel=""nofollow"">Twitter Web Client</a>",@phonedude_mln @WebSciDL @hvdsomp @weiglemc @stewartbrand Thank you so much!,https://twitter.com/azraiekv/status/978336554446938118,Wed Apr 25 01:29:21 +0000 2012,azraiekv,false,it's all about graphs | Columbia University | @force11rescomm BOD | LRTS | @VIVOcollab LG,3334,566,693,52,"New York, USA",azra 🕊️,azraiekv,4665,,,false
,Mon Mar 26 03:07:37 +0000 2018,,,,0,978106167695171585,DaleLore,977987309554552800,472898097,en,,,0,,,"<a href=""http://twitter.com"" rel=""nofollow"">Twitter Web Client</a>","@DaleLore @ablwr @despens @AnnaPerricci @jsdeutch Hi Lorena! I'd love the notes, though I can't offer any in return! If you'd still want to share, my DMs are open. Thanks in advance and please don't feel obliged to message.",https://twitter.com/femalegazebot/status/978106167695171585,Fri Nov 11 02:02:13 +0000 2016,femalegazebot,false,"code @nytimes. prev @HarvardLIL, @BKCHarvard. immigrant, not really a bot. likes can b saves.",4560,322,759,2,brooklyn/warsaw/////,anna bialas,femalegazebot,1306,,,false
,Mon Mar 26 18:32:09 +0000 2018,,,,1,978338836316123136,phonedude_mln,977198802619781100,151901549,en,,,1,,,"<a href=""https://mobile.twitter.com"" rel=""nofollow"">Twitter Lite</a>",@phonedude_mln @WebSciDL @hvdsomp @weiglemc @stewartbrand Any chance you could post the slides for public download somewhere else? SlideShare requires a LinkedIn account,https://twitter.com/amelia_acker/status/978338836316123136,Thu Jun 18 15:25:55 +0000 2009,amelia_acker,false,Assistant Professor @UTiSchool・critical data studies・mobile ICTs・archives & digital preservation・standards・infrastructure 📱,7866,1413,1018,46,ATX + NYC,Amelia 🤳🛶🚲,amelia_acker,8848,,http://www.ameliaacker.com,false
,Mon Mar 26 10:34:56 +0000 2018,,,,3,978218738519564288,femalegazebot,978106167695171600,796895774449733600,en,,,0,,,"<a href=""http://twitter.com/download/iphone"" rel=""nofollow"">Twitter for iPhone</a>",@femalegazebot @DaleLore @despens @AnnaPerricci @jsdeutch I think this one was livestreamed so a recorded version may be up a little later too (hoping!!)?,https://twitter.com/ablwr/status/978218738519564288,Wed Feb 25 04:18:34 +0000 2009,ablwr,false,"Technologist, enthusiast. 👩‍💻 AV Preservation Specialist @archivematica. I like video & open source. See also: @MediaConch, #qctools, @recursecenter, @nttwconf",13132,6047,516,106,eXistenZ,➺ Ashley Blewer! ❥ (@ashley@digipres.club),ablwr,20577,,https://ashleyblewer.com,false
,Mon Mar 26 16:31:00 +0000 2018,eaw18,,https://livestream.com/newmuseum/EAWRhizomeSession5/videos/172190125,2,978308347530301440,azraiekv,978037278860894200,562571892,en,"Portsmouth, VA",false,0,,,"<a href=""http://twitter.com"" rel=""nofollow"">Twitter Web Client</a>",@azraiekv @phonedude_mln @WebSciDL @hvdsomp @weiglemc @stewartbrand See https://t.co/BrE7s4253t starting at 1:09:00-ish. #eaw18,https://twitter.com/machawk1/status/978308347530301440,Tue Jan 31 22:05:50 +0000 2012,machawk1,false,"Floridian turned Virginian; @WebSciDL PhD student researcher at @ODUcs, Creator of #webarchiving software: WARCreate WAIL Mink ipwb",2522,448,380,44,"Portsmouth, VA",Mat Kelly,machawk1,1846,,http://www.cs.odu.edu/~mkelly,false`;

let numberOfTweetNotParsed = 0;
/** 
 * This function create an Tweet Object with one CSV line
 * @param {String} lineToParse one CSV line with 34 informations divided with :  ","
 * @return {Object} A tweet object if everything is ok; else error message
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
        //throw new Error('Unexpdected number of fields in the CSV file, function ParseLineTweet');
        numberOfTweetNotParsed++;
        return 'Error for this Tweet'
    }
}

/** 
 * This function create array of Tweets Objects with CSV lines
 * @param {String} linesToParse CSV lines divided with "/n"
 * @return {Array} Array of Tweets objects if all tweets are parsed; else error message
 */
function ParseAllLineTweet(linesToParse) {
    // Every line of the CSV are stocked in the array data
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
// test for ParseAllLineTweet : console.log(ParseAllLineTweet(str));

/**
 * This function create array of Tweets Objects with CSV file
 * @param {String} PathOfTheFileToParse 
 * @return {Array} Array of Tweets objects if all tweets are parsed; else error message
 */
function ParseCSVFileTweet(PathOfTheFileToParse) {
    let fs = require('fs');
    let readMe = fs.readFileSync(PathOfTheFileToParse,'utf8');
    arrayOfTweet = ParseAllLineTweet(readMe);
    return arrayOfTweet;
}

// test for ParseCSVFileTweet :
// console.log(ParseCSVFileTweet('./tweet-csv/test.csv'));
//number of tweet not parsed : 
// console.log(numberOfTweetNotParsed);
// console.log(ParseCSVFileTweet(arrayOfTweet.length));


function ParseCSVFilesTweet() {  
    var arrayOfFilesPath = ['./tweet-csv/Fri Mar 23/tweets.csv', './tweet-csv/Mon Mar 19/tweets.csv','./tweet-csv/Mon Mar 26/tweets.csv','./tweet-csv/Sat Mar 17/tweets.csv','./tweet-csv/Sat Mar 24/tweets.csv','./tweet-csv/Sun Mar 18/tweets.csv','./tweet-csv/Sun Mar 25/tweets.csv','./tweet-csv/Thu Mar 15/tweets.csv','./tweet-csv/Thu Mar 22/tweets.csv','./tweet-csv/Tue Mar 20/tweets.csv','./tweet-csv/Wed Mar 21/tweets.csv',];
    let j = 0;
    let arrayOfAllTweet = new Array;
    while(j <= arrayOfFilesPath.length-1){
         
         //arrayOfAllTweet.push(ParseCSVFileTweet(arrayOfFilesPath[j]));
         arrayOfAllTweet = arrayOfAllTweet.concat(ParseCSVFileTweet(arrayOfFilesPath[j]));
    j++;
    }
return arrayOfAllTweet;
}
console.log(ParseCSVFilesTweet().length);
console.log(numberOfTweetNotParsed);

//module.exports.parseCSVfiles = ParseCSVFilesTweet;
module.exports.ParseCSVFilesTweet = ParseCSVFilesTweet;

