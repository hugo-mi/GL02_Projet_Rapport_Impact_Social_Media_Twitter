var tweet = require('./tweet.js');
const parser = require('./parser.js');
const program = require('caporal');
const fs = require("fs");

exports.module = require('caporal')
    .command('top10TweetAuthor', 'Display the Top 10 of Author where their tweet are the moste retweet for a specific day')
    .argument('<day>', 'The day like FriMar23')

.action(function (args, options, logger){ 
    let j = 1;
    let k = 1;
    let l = 1;

    let tableauDay = new Array;

    let ParseCSVFilesTweetOccurence = new Array;
    ParseCSVFilesTweetOccurence = parser.ParseCSVFilesTweet();


    while(k <= ParseCSVFilesTweetOccurence.length-1){
        str = ParseCSVFilesTweetOccurence[k].created_at;
        let data = str.split('');
        tableauDay.push(str[0]+str[1]+str[2]+str[4]+str[5]+str[6]+str[8]+str[9]);
        k++;
    }

    let tableauTweetDay = new Array;
    while(l <= ParseCSVFilesTweetOccurence.length-1){
        let tweetDay = ParseCSVFilesTweetOccurence[l];
        if(tableauDay[l] == args.day){
            tableauTweetDay.push(tweetDay);
        }
        l++;
    }

let tableauTweetDayTriee = new Array;
tableauTweetDayTriee  = tableauTweetDay.sort(function compare(x,y){
    return y.retweet_count - x.retweet_count;
});

fs.appendFile('Top10Author.txt', ' \t \t \t --Top 10 Author-- ' ,function (err) {
    if (err) throw err;
});

let Top10TweetAuthors = new Array;

    while(j<=10){
        let top10name = tableauTweetDayTriee[j].user_name;
        let top10description = tableauTweetDayTriee[j].user_description;
        let top10location = tableauTweetDayTriee[j].user_location;
        let top10followers = tableauTweetDayTriee[j].user_followers_count;
        let top10friends = tableauTweetDayTriee[j].user_friends_count;
        Top10TweetAuthors.push(j + " => " + " || Name : " +top10name + " || Decription : " + top10description + " || Location : " + top10location + " || Follower Count : " +top10followers + " || Friend Count : " + top10friends);
        
        fs.appendFile('Top10Author.txt', "      " + j + " => " + " || Name : " +top10name + " || Decription : " + top10description + " || Location : " + top10location + " || Follower Count : " +top10followers + " || Friend Count : " + top10friends ,function (err) {
            if (err) throw err;
        });
        
        j++;
    }
logger.info(Top10TweetAuthors);
})

program.parse(process.argv); 



