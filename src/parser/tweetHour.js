var tweet = require('./tweet.js');
const parser = require('./parser.js');

const program = require('caporal');
const fs = require("fs");


//Le nombre de tweets pour une période donnée par journée en fonction d'un utilisateur
exports.module = require('caporal')
    .command('tweetHour', 'Count the number of tweet with a specific period and specific day')
    .argument('<day>', 'The day like FriMar23')
    .argument('[hourBeggining]', '15')
    .argument('[hourEnd]', '17')
    .argument('<username>', 'The username')

.action(function (args, options, logger){

let ParseCSVFilesTweetOccurence = new Array;
    ParseCSVFilesTweetOccurence = parser.ParseCSVFilesTweet();


let compteur = 0;
let i = 1;
let tableauDay = new Array;
let tableauHour = new Array;

//console.log(ParseCSVFilesTweetOccurence[24].user_name);
//console.log(ParseCSVFilesTweetOccurence[24].created_at);

// permet de creer un tableau contenant les jours et les heures
while (i <= ParseCSVFilesTweetOccurence.length-1) {
    str = ParseCSVFilesTweetOccurence[i].created_at;
    let data = str.split('');

    tableauDay.push(str[0]+str[1]+str[2]+str[4]+str[5]+str[6]+str[8]+str[9]);
    tableauHour.push(str[11]+str[12]);
    //console.log(tableauHour);
    //console.log(tableauDay);
    i++;
}

let arrayHourDouble = new Array;

for (var j=1;j<=ParseCSVFilesTweetOccurence.length-1; j++) {

    if (tableauDay[j]==args.day
        && tableauHour[j]>=args.hourBeggining
        && tableauHour[j]<=args.hourEnd
        && ParseCSVFilesTweetOccurence[j].user_name== args.username
        ){
compteur++;
arrayHourDouble.push(tableauHour[j]);
          }
}
//console.log(arrayHourDouble);
//console.log(arrayHourDouble.length);


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

  let arrayHour = new Array;
  arrayHour = cleanArray(arrayHourDouble);

//console.log(arrayHour);



function countTweetsByHour() {
 let c1 = 0;
 let c2 = 0;
  let arrayCount = new Array;
  for (var i=0; i<= arrayHour.length-1; i++ ){
    arrayCount[i] = 0;
  }



 while(c1 <= arrayHour.length-1){
    while(c2 <= arrayHourDouble.length-1){
      if (arrayHourDouble[c2] == arrayHour[c1]){
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
arrayCount = countTweetsByHour();


let arrayPresentationHour = new Array(arrayHour,arrayCount);

fs.appendFile('TweetHour.txt', ' \t --Tweet Hour-- ' ,function (err) {
    if (err) throw err;
});

for(var p=0; p<= arrayHour.length-1; p++){
  
  logger.info(arrayPresentationHour[0][p]+ "h -->  " +arrayPresentationHour[1][p]+" times " );
  fs.appendFile('TweetHour.txt',arrayPresentationHour[0][p]+ "h -->  " +arrayPresentationHour[1][p]+" times " ,function (err) {
    if (err) throw err;
}); 
}

logger.info ("Le nombre total de tweet est : " + compteur); 
fs.writeFileSync("TweetHour.txt" ,"Le nombre total de tweet est : " + compteur, "UTF-8");
})

program.parse(process.argv); 

