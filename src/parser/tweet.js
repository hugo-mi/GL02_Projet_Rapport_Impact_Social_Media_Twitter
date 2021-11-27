/** 
* Class of Tweet
* @version 1.0
*/
class Tweet {   
  constructor(tweetDataInLine) {
    this.coordinates = tweetDataInLine[0];
    this.created_at = tweetDataInLine[1];
    this.hashtags = tweetDataInLine[2];
    this.media = tweetDataInLine[3];
    this.urls = tweetDataInLine[4];
    this.favorite_count = tweetDataInLine[5];
    this.id = tweetDataInLine[6];
    this.in_reply_to_screen_name = tweetDataInLine[7];
    this.in_reply_to_status_id = tweetDataInLine[8];
    this.in_reply_to_user_id = tweetDataInLine[9];
    this.lang = tweetDataInLine[10];
    this.place = tweetDataInLine[11];
    this.possibly_sensitive = tweetDataInLine[12];
    this.retweet_count = tweetDataInLine[13];
    this.reweet_id = tweetDataInLine[14];
    this.retweet_screen_name = tweetDataInLine[15];
    this.source = tweetDataInLine[16];
    this.text = tweetDataInLine[17];
    this.tweet_url = tweetDataInLine[18];
    this.user_created_at = tweetDataInLine[19];
    this.user_screen_name = tweetDataInLine[20];
    this.user_default_profile_image = tweetDataInLine[21];
    this.user_description = tweetDataInLine[22];
    this.user_favourites_count = tweetDataInLine[23];
    this.user_followers_count = tweetDataInLine[24];
    this.user_friends_count = tweetDataInLine[25];
    this.user_listed_count = tweetDataInLine[26];
    this.user_location = tweetDataInLine[27];
    this.user_name = tweetDataInLine[28];
    // this.user_screen_name once agian .. error in CSV data but not mind ..
    this.user_screen_name = tweetDataInLine[29];
    this.user_statuses_count = tweetDataInLine[30];
    this.user_time_zone = tweetDataInLine[31];
    this.user_urls = tweetDataInLine[32];
    this.user_verified = tweetDataInLine[33];
  }
};
  module.exports = Tweet;



  