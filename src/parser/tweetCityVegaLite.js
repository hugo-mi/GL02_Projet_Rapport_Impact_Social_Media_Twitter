// average with chart
var fs = require('fs');
var colors = require('colors');
var tweet = require('./tweet.js');
const parser = require('./parser.js');
var vg = require('vega');
var vegalite = require('vega-lite');

var cli = require('caporal')
console.log(cli)

cli
.command('averageChart', 'Export the result of the function of TweetCity.js to a SVG picture')
.alias('avgChart')
.argument('<file>', '')
.action(function(args, options, logger){


/*

  Creates an array that contains the list of all places
  where the tweets were tweeted

*/

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


let arrayPresentation = new Array(arrayCities,arrayCount);
var City = '';
for(var i=0; i <= arrayCities.length-1; i++){
   
    City = (City + "{\"Ville\" : \'"+ arrayPresentation[0][i]+"\' ,\"Nombre de Tweets\" : \"" + arrayPresentation[1][i]+"\"},");
    
}


    // fs.readFile(args.file, 'utf8', function (err,data) {
        var avgChart = {
            "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
            "data": {
                "values": [
                    
                   
                  {"Ville" : '"Manhattan, NY"' ,"Nombre de Tweets" : "40"},{"Ville" : '"New York, NY"' ,"Nombre de Tweets" : "9"},{"Ville" : '"Superior, CO"' ,"Nombre de Tweets" : "1"},{"Ville" : '"NoLIta, Manhattan"' ,"Nombre de Tweets" : "33"},{"Ville" : '"Portsmouth, VA"' ,"Nombre de Tweets" : "7"},{"Ville" : '"Beacon, NY"' ,"Nombre de Tweets" : "2"},{"Ville" : '"Austin, TX"' ,"Nombre de Tweets" : "1"},{"Ville" : '"New Jersey, USA"' ,"Nombre de Tweets" : "1"},{"Ville" : '"Washington, DC"' ,"Nombre de Tweets" : "3"},{"Ville" : '"San Diego, CA"' ,"Nombre de Tweets" : "1"},{"Ville" : 'Rhizome @ The New Museum' ,"Nombre de Tweets" : "2"},{"Ville" : '"Silver Spring, MD"' ,"Nombre de Tweets" : "3"},{"Ville" : '"Fairfax, VA"' ,"Nombre de Tweets" : "2"},{"Ville" : '"White Oak, MD"' ,"Nombre de Tweets" : "1"},{"Ville" : '"Philadelphia, PA"' ,"Nombre de Tweets" : "4"},{"Ville" : '"West Humber-Clairville, Toronto"' ,"Nombre de Tweets" : "1"},{"Ville" : '"Camden Town, London"' ,"Nombre de Tweets" : "1"},{"Ville" : '"Elizabeth, NJ"' ,"Nombre de Tweets" : "1"},{"Ville" : '"Poplar, London"' ,"Nombre de Tweets" : "1"},{"Ville" : '"Newark, NJ"' ,"Nombre de Tweets" : "1"},{"Ville" : '"Ithaca, NY"' ,"Nombre de Tweets" : "1"},{"Ville" : 'New Museum' ,"Nombre de Tweets" : "2"},{"Ville" : '"Winston-Salem, NC"' ,"Nombre de Tweets" : "1"},{"Ville" : '"Waterloo, Ontario"' ,"Nombre de Tweets" : "3"},
                  City
                ]

           
            },
           
           "encoding": {
              "y": {"field": "Ville", "type": "nominal"},
              "x": {"field": "Nombre de Tweets", "type": "quantitative"}
            },
            "layer": [{
              "mark": "bar"
            }, {
              "mark": {
                "type": "text",
                "align": "left",
                "baseline": "middle",
                "dx": 3
              },
              "encoding": {
                "text": {"field": "Nombre de Tweets", "type": "quantitative"}
              }
            }]
        }
           

        const myChart = vegalite.compile(avgChart).spec;
        
        /* SVG version */
        var runtime = vg.parse(myChart);
        logger.debug('Parsing ok');
        var view = new vg.View(runtime).renderer('svg').run();
        logger.debug('Render ok');
        var mySvg = view.toSVG();
        logger.debug('To SVG ok');
        mySvg.then(function(res){
            fs.writeFileSync("./result.svg", res)
            view.finalize();
            logger.info(myChart);
            logger.info("Chart output : ./result.svg");
        });
    // })
})

cli.parse(process.argv);