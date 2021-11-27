var tweet = require('C:/HUGO/UTT/COURS/GL02/GL02-Projet/src/parser/tweet.js');
const parser = require('./parser.js');



function occrurence(){ 
    let compteur = 0;
    let ParseCSVFilesTweetOccurence = new Array;
    ParseCSVFilesTweetOccurence = parser.ParseCSVFilesTweet();
    let i = 1;
    while(i <= ParseCSVFilesTweetOccurence.length-1){
        if(ParseCSVFilesTweetOccurence[i].hashtags != ''){    
            compteur++;
        }
    i++;
    }
    return compteur;
}

console.log(occrurence());





function tweetHashtags(){ 
    let compteur = 0;
    let i = 1;
    let ParseCSVFilesTweetOccurence = new Array;
    ParseCSVFilesTweetOccurence = parser.ParseCSVFilesTweet();
    let tableauTweetHashtag = new Array;
    while(i <= ParseCSVFilesTweetOccurence.length-1){
        let tweet = ParseCSVFilesTweetOccurence[i];
        if(ParseCSVFilesTweetOccurence[i].hashtags != ''){   
            tableauTweetHashtag.push(tweet);
            compteur++;
        }
    i++;
    }
    return  tableauTweetHashtag;
}
