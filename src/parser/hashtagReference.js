var tweet = require('./tweet.js');
const parser = require('./parser.js');
const program = require('caporal');
const fs = require("fs");


//La liste des hashtags associés à un hashtag de référence


exports.module = require('caporal')
    .command('hashtagReference', 'Displays the list of hashtags associated to a reference hashtag')
    .argument('<hashtag>', 'The reference hashtag, type it without the # in front')
  


    .action(function (args, options, logger){



if (args.hashtag.indexOf('#') == 0) {
 
   	logger.warn('Invalid hashtag type format. Try typing it without the #');
}


//we have to do a regex to say that the hashtag has to contain a certain word

var regex = new RegExp(args.hashtag);
var tabTweet = [];


let ParseCSVFilesTweetOccurence = new Array;
    ParseCSVFilesTweetOccurence = parser.ParseCSVFilesTweet();

    fs.appendFile('HashtagReference.txt', ' \t \t \t --Hashtag Reference-- ' ,function (err) {
        if (err) throw err;
    }); 


for (var i = 0; i < ParseCSVFilesTweetOccurence.length; i++) {
	var tabHastag = ParseCSVFilesTweetOccurence[i].hashtags.split(" ");
	var tweetValide = false;
	if (tabHastag.length > 1) {
		for (var j = tabHastag.length - 1; j >= 0; j--) {
			if (tabHastag[j].match(regex) != null && tweetValide == false) {
				tabTweet.push(ParseCSVFilesTweetOccurence[i]);
			}
		}
	}
}

for (var i = tabTweet.length - 1; i >= 0; i--) {
	logger.info("---------");
    logger.info(tabTweet[i].hashtags);
    fs.appendFile('HashtagReference.txt', tabTweet[i].hashtags ,function (err) {
        if (err) throw err;
    }); 
}

logger.info("There is/are " + tabTweet.length+1 + ' tweets with the "' + args.hashtag + '" hashtag');
fs.writeFileSync("HashtagReference.txt" ,"There is/are " + tabTweet.length+1 + ' tweets with the "' + args.hashtag + '" hashtag', "UTF-8");



})

program.parse(process.argv); 


