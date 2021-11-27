var tweet = require('./tweet.js');
const parser = require('./parser.js');
const program = require('caporal');
const fs = require("fs");

exports.module = require('caporal')
    .command('authorActivity', 'Display the Top 10 of Author where their tweet are the moste retweet for a specific day')
    .argument('<day>', 'The day like FriMar23')
    .argument('<hashtag>', 'The hashtag')

.action(function (args, options, logger){ 
    let j = 1;
    let k = 1;
    let l = 1;
    let compteur = 0;

    let tableauDay = new Array;

    let ParseCSVFilesTweetOccurence = new Array;
    ParseCSVFilesTweetOccurence = parser.ParseCSVFilesTweet();

    let tableauTweetHashtag = new Array;

    while(i <= ParseCSVFilesTweetOccurence.length-1){
        let tweet = ParseCSVFilesTweetOccurence[i];
        if(ParseCSVFilesTweetOccurence[i].hashtags == args.hashtag && ParseCSVFilesTweetOccurence[i].created_at != '' && ParseCSVFilesTweetOccurence[i].created_at != undefined){   
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

    let tableauUserName = new Array;

    while(l <= tableauTweetHashtag.length-1){
        let UserName = tableauTweetHashtag[l].user_name;
        if (tableauDay[l] == args.day){
            tableauUserName.push(UserName);
        }
        l++;
    }

    let tableauUserNameSansDoublon = tableauUserName.filter(function(item, pos) {
        return tableauUserName.indexOf(item) == pos;
    })

    fs.appendFile('AuthorActivity.txt', ' \t --Author Activity-- ' ,function (err) {
        if (err) throw err;
    });

    let tableauUserActivity = new Array; 

    for (var r = 1 ; r <= tableauUserNameSansDoublon.length-1; r++){
        compteur = 0;
        let name = tableauUserNameSansDoublon[r]; 
        for (var t = 1 ; t <= tableauUserName.length-1; t++){
            if(tableauUserNameSansDoublon[r] == tableauUserName[t]){
                compteur++;
            }
        }
        tableauUserActivity.push(name + " have tweeted : " + compteur + " for this " + args.day + " and for this hashtag #" + args.hashtag);
        
        fs.appendFile('AuthorActivity.txt', "   || " + name + " have tweeted : " + compteur + " for this " + args.day + " and for this hashtag #" + args.hashtag ,function (err) {
            if (err) throw err;
        });
    }


    logger.info(tableauUserActivity);
})

program.parse(process.argv); 

