# GL02-Projet - Rapport Impact Social Media Twitter

## CONTEXTE

Synevent est une société d'évènementiel qui organise des salons, forums et conférences pour le compte d'entreprises et de société scientifiques. L'équipe communication s'assure de la bonne visibilité dans la presse spécialisée et sur internet. Sur ce dernier point, Synevent utilise particulièrement Twitter dont pour cheque prestation un hashtag spécifique est défini d'un commun accord avec le client. 

La société souhaite désormais accompagner ses prestations d'un rapport d'impact social media sur Twitter à l'issue de l'évènement. La société est actuellement capable d'extraire via l'API Twitter l'ensemble des tweets utilisant le hashtag de l'évènement en question au format CSV. Cependant, en l'état, les données sont difficiles à exploiter pour le chef de projet afin qu'il puisse préparer le rapport d'impact social média.

## OBJECTIF
Permettre aux chefs de projets de gagner du temps dans la rédaction des rapport d'impact en extrayant les données importantes d'un ensemble de tweet et en préparant les graphiques à ajouter dans le rapport. 

En analysant les tweets, automatisation d'un rapport d'impact social média synthétique facilitant la lecture du client avec l'utilisation de graphique et de citation de tweets facilement trouvable. 


## INTRODUCTION

Les fonctions sont excécutables depuis des fichiers séparés,
chaque fichier js permetant d'effectuer une fonction (d'utiliser une des fonctionnalités proposées)

NPM REQUIS POUR L'UTILISATION

```bash
npm install caporal
npm install vega-lite
```
## COMMANDES

-> AuthorActivity.js
_Affiche du Top 10 des auteurs dont le tweet a été le plus retweeté pour un jour donné._

	Display the Top 10 of Author where their tweet are the moste retweet for a specific day
	Command : authorActivity
	Argument1 : '<day>', 'The day like FriMar23'
	Argument2 : '<hashtag>', 'The hashtag without the #'

-> hashtahReference.js
_Affiche la liste des hashtags associés à un hashtag de référence._

	Displays the list of hashtags associated to a reference hashtag
	Command : hashtagReference
	Argument1 : '<hashtag>', 'The reference hashtag, type it without the # in front'


-> top10Author.js  
_Affiche le Top 10 des auteurs dont le tweet a été le plus retweeté pour un jour donné._

	Display the Top 10 of Author where their tweet are the moste retweet for a specific day
	Command : top10TweetAuthor
	Argument1 : '<day>', 'The day like FriMar23'


-> top10hashtag.js 
_View the Top 10 most retweeted authors for a given day._

	Return the 10 most retweeted tweets with specific hashtag and specific day
	Command : top10TweetHashtag
	Argument1 : '<day>', 'The day like FriMar23'


-> tweethour.js  
_Compter le nombre de tweet avec une période spécifique et un jour spécifique_

	Count the number of tweet with a specific period and specific day
	Command : tweetHour
	Argument1 : '<day>', 'The day like FriMar23
    	Argument2 : '[hourBeggining]', '15'
   	Argument3 : '[hourEnd]', '17'
    	Argument4 : '<username>', 'The username'

-> hashtagPeriod.js  
_Compter le nombre de tweet avec une période spécifique et un jour spécifique_

	Count the number of tweet with a specific period and specific day
	Command : hashtagPeriod
	Argument1 : '<hashtag>', 'The reference hashtag, type it without the # in front'
    	Argument2 : '[hourBeggining]', '15'
   	Argument3 : '[hourEnd]', '17'
	Argument4 : '<day>', 'The day like FriMar23'

-> tweetCity.js
_Affiche le nombre de tweet par ville_

	Displays the number of tweet per city
	Command : tweetCity

-> tweetCityVegaLite.js
_Exporter le résultat de la fonction de TweetCity.js vers une image SVG_

	Export the result of the function of TweetCity.js to a SVG picture
	Command : averageChart
	Argument1 : You can write what you want

## FICHIERS

```README.txt```
```AuthorActivity.js```
```hashtagPeriod.js```
```hashtagReference.js```
```parser```
```top10Author.js```
```top10hashtag.js```
```tweet.js```
```tweetCity.js```
```tweetCityVegaLite.js```
```tweetHour.js```
