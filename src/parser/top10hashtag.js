var tweet = require('./tweet.js');
const parser = require('./parser.js');
const program = require('caporal');
const fs = require("fs");

exports.module = require('caporal')
    .command('top10TweetHashtag', 'Count the number of tweet with specific hashtag and specific day')
    .argument('<day>', 'The day like FriMar23')

.action(function (args, options, logger){ 
    let i = 1;
    let j = 1;
    let k = 1;
    let l = 1;
    let tableauDay = new Array;

    let ParseCSVFilesTweetOccurence = new Array;
    ParseCSVFilesTweetOccurence = parser.ParseCSVFilesTweet();

    let tableauTweetHashtag = new Array;

    while(i <= ParseCSVFilesTweetOccurence.length-1){
        let tweet = ParseCSVFilesTweetOccurence[i];
        if(ParseCSVFilesTweetOccurence[i].hashtags != '' && ParseCSVFilesTweetOccurence[i].created_at != '' && ParseCSVFilesTweetOccurence[i].created_at != undefined){   
            tableauTweetHashtag.push(tweet);
        }
    i++;
    }

    while(k <= tableauTweetHashtag.length-1){
        str = tableauTweetHashtag[k].created_at;
        let data = str.split('');
        tableauDay.push(str[0]+str[1]+str[2]+str[4]+str[5]+str[6]+str[8]+str[9]);
        k++;
    }

    let tableauTweetHashtagDay = new Array;
    while(l <= tableauTweetHashtag.length-1){
        let tweetHashtagsDay = tableauTweetHashtag[l];
        if(tableauDay[l] == args.day){
            tableauTweetHashtagDay.push(tweetHashtagsDay);
        }
        l++;
    }

let tableauTweetHashtagDayTriee = new Array;
tableauTweetHashtagDayTriee  = tableauTweetHashtagDay.sort(function compare(x,y){
    return y.retweet_count - x.retweet_count;
});

fs.appendFile('Top10Hashtag.txt', ' \t \t \t --Top 10 Hashtag-- ' ,function (err) {
    if (err) throw err;
}); 

 let Top10TweetHashtag = new Array;

    while(j<=10){
        let top10Hashtag = tableauTweetHashtagDayTriee[j].hashtags;
        let top10text = tableauTweetHashtagDayTriee[j].text;
        let top10Author = tableauTweetHashtagDayTriee[j].user_name;
        Top10TweetHashtag.push(j + " => " + " || Name : " + top10Author + " || Hashtag : " + top10Hashtag + " || Tweet : " + top10text);
        
        fs.appendFile('Top10Hashtag.txt', "    " + j + " => " + " || Name : " + top10Author + " || Hashtag : " + top10Hashtag + " || Tweet : " + top10text ,function (err) {
            if (err) throw err;
        }); 
        
        j++;
    }
logger.info(Top10TweetHashtag);
})

program.parse(process.argv); 

