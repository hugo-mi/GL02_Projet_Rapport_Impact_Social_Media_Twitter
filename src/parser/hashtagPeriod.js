var tweet = require('./tweet.js');
const parser = require('./parser.js');
const program = require('caporal');
const fs = require("fs");



/* La liste des hashtags associés à un hashtag de référence (Une recherche est effectuée avec comme critère de recherche, le fait 
qu’un hashtag contienne l’hashtag de référence (ex : #BonjourLesAmis 
contient #Bonjour). Il faudra ensuite supprimer de la sélection les 
hashtags identiques à celui de référence.) */


//Le nombre de tweets sur un hashtag pour une période donnée par journée
exports.module = require('caporal')
    .command('hashtagPeriod', 'Display the Top 10 of Author where their tweet are the moste retweet for a specific day')
    .argument('<hashtag>', 'The hashtag')
    .argument('[hourBeggining]', '15')
    .argument('[hourEnd]', '17')
    .argument('<day>', 'The day like FriMar23')
    

    .action(function (args, options, logger){

        if(args.hourBeggining >= args.hourEnd || args.hourBeggining<0 || args.hourBeggining>23 || args.hourEnd<0 || args.hourEnd>23){
            logger.warn('Invalid date type format'); 
        }

let ParseCSVFilesTweetOccurence = new Array;
    ParseCSVFilesTweetOccurence = parser.ParseCSVFilesTweet();


let compteur = 0;
let i = 1;
let tableauDay = new Array;
let tableauHour = new Array;

while (i <= ParseCSVFilesTweetOccurence.length-1) {
    str = ParseCSVFilesTweetOccurence[i].created_at;
    let data = str.split('');

    tableauDay.push(str[0]+str[1]+str[2]+str[4]+str[5]+str[6]+str[8]+str[9]);
    tableauHour.push(str[11]+str[12]);
    //console.log(tableauHour);
    //console.log(tableauDay);
    i++;
}

fs.appendFile('HashtagPeriod.txt', ' \t --Hashtag Period-- ' ,function (err) {
    if (err) throw err;
});

for (var j=1;j<=ParseCSVFilesTweetOccurence.length-1; j++) {

    if (tableauDay[j]==args.day
        
        && tableauHour[j]>=args.hourBeggining
        && tableauHour[j]<=args.hourEnd
        && ParseCSVFilesTweetOccurence[j].hashtags== args.hashtag
        ){
compteur++;}
} 

logger.info("On " + args.day + " and for the hashtag #" + args.hashtag + " and the period [ " + args.hourBeggining + " H ; " + args.hourEnd + " H ]" + " there are : " + compteur + " Tweet");

fs.writeFileSync("HashtagPeriod.txt", "On " + args.day + " and for the hashtag #" + args.hashtag + " and the period [ " + args.hourBeggining + " H ; " + args.hourEnd + " H ]" + " there are : " + compteur + " Tweet" , "UTF-8");

})

program.parse(process.argv); 

/*
console.log(hugo('eaw18', 00, 03, 'Fri Mar 23'));
//User has to type hashtag without # and put hours like this : 00 to 03 for midnight to 3am and date like in the csv file


function hugo(hashtag, hour_beggining, hour_end, day){

let ParseCSVFilesTweetOccurence = new Array;
    ParseCSVFilesTweetOccurence = parser.ParseCSVFilesTweet();


let compteur = 0;
let i = 1;
let tableauDay = new Array;
let tableauHour = new Array;

while (i <= ParseCSVFilesTweetOccurence.length-1) {
    str = ParseCSVFilesTweetOccurence[i].created_at;
    let data = str.split('');

    tableauDay.push(str[0]+str[1]+str[2]+str[3]+str[4]+str[5]+str[6]+str[7]+str[8]+str[9]);
    tableauHour.push(str[11]+str[12]);
    //console.log(tableauHour);
    //console.log(tableauDay);
    i++;
}

for (var j=1;j<=ParseCSVFilesTweetOccurence.length-1; j++) {

    if (tableauDay[j]==day
        && tableauHour[j]>=hour_beggining
        && tableauHour[j]<=hour_end
        && ParseCSVFilesTweetOccurence[j].hashtags== hashtag
        ){
compteur++;}
} 

return compteur;
}

*/