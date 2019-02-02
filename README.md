#GL02-Projet

##INTRODUCTION

Les fonctions sont excécutables depuis des fichiers séparés,
chaque fichier js permetant d'effectuer une fonction (d'utiliser une des fonctionnalités proposées)

NPM REQUIS POUR L'UTILISATION

```bash
npm install caporal
npm install vega-lite
```
##COMMANDES

-> AuthorActivity.js 
	
	Display the Top 10 of Author where their tweet are the moste retweet for a specific day
	Command : authorActivity
	Argument1 : '<day>', 'The day like FriMar23'
	Argument2 : '<hashtag>', 'The hashtag without the #'

-> hashtahReference.js 
	
	Displays the list of hashtags associated to a reference hashtag
	Command : hashtagReference
	Argument1 : '<hashtag>', 'The reference hashtag, type it without the # in front'


-> top10Author.js  
	
	Display the Top 10 of Author where their tweet are the moste retweet for a specific day
	Command : top10TweetAuthor
	Argument1 : '<day>', 'The day like FriMar23'


-> top10hashtag.js  
	
	Return the 10 most retweeted tweets with specific hashtag and specific day
	Command : top10TweetHashtag
	Argument1 : '<day>', 'The day like FriMar23'


-> tweethour.js  
	
	Count the number of tweet with a specific period and specific day
	Command : tweetHour
	Argument1 : '<day>', 'The day like FriMar23
    	Argument2 : '[hourBeggining]', '15'
   	Argument3 : '[hourEnd]', '17'
    	Argument4 : '<username>', 'The username'

-> hashtagPeriod.js  
	
	Count the number of tweet with a specific period and specific day
	Command : hashtagPeriod
	Argument1 : '<hashtag>', 'The reference hashtag, type it without the # in front'
    	Argument2 : '[hourBeggining]', '15'
   	Argument3 : '[hourEnd]', '17'
	Argument4 : '<day>', 'The day like FriMar23'

-> tweetCity.js 
	
	Displays the number of tweet per city
	Command : tweetCity

-> tweetCityVegaLite.js 
	
	Export the result of the function of TweetCity.js to a SVG picture
	Command : averageChart
	Argument1 : You can write what you want 

#FICHIERS

- README.txt
- AuthorActivity.js
- hashtagPeriod.js
- hashtagReference.js
- parser
- top10Author.js
- top10hashtag.js
- tweet.js
- tweetCity.js
- tweetCityVegaLite.js
- tweetHour.js

