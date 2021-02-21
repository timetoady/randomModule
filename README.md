# randomModule

#### This module is a random group of methods just to get my feet wet in making my own node modules. There will be some useful ones (like a easy try/catch fetch for REST APIs) and some other random stuff. 

## Example Usage

To install:

`npm install @timetoady/randommodule`

To use:

```javascript
const randomModule = require('@timetoady/randommodule');
randomModule.tryCatch(URL, method, headers, modifier) //example of use of one of the methods
```

## Methods

### tryCatch method

`tryCatch(URL, method, headers, modifier)`

#### Usage:
A basic async/await API call that uses a try/catch block and console.errors any errors received. Requires endpoint URL. You can specify headers, an API method (GET, POST, PUT, etc.), and also optionally modifier to call the API from different endpoints of the URL. Method and modifier default to `GET` and `""` (respectively) if unspecified, and headers defaults to `{}`. Returns data as JSON.

#### Example:
```javascript
    //In an async function.
    const jikanCoboywBebopAPI = "https://api.jikan.moe/v3/anime/1/episodes"
    const result = await tryCatch(jikanCoboywBebopAPI, "GET", {}, ".episodes") 
    console.log(result)
```

#### Result should be:
```json
{
    "request_hash": "request:anime:c8a5be55579a0147b5c455245461fe69a7347e1b",
    "request_cached": true,
    "request_cache_expiry": 64469,
    "episodes_last_page": 1,
    "episodes": [
        {
            "episode_id": 1,
            "title": "Asteroid Blues",
            "title_japanese": "アステロイド・ブルース",
            "title_romanji": "Asteroid Blues ",
            "aired": "1998-10-24T00:00:00+00:00",
            "filler": false,
            "recap": false,
            "video_url": "https://myanimelist.net/anime/1/Cowboy_Bebop/episode/1",
            "forum_url": "https://myanimelist.net/forum/?topicid=29264"
        },
        {
            "episode_id": 2,
            "title": "Stray Dog Strut",
            "title_japanese": "野良犬のストラット",
            "title_romanji": "Nora Inu no Strut ",
            "aired": "1998-04-03T00:00:00+00:00",
            "filler": false,
            "recap": false,
            "video_url": "https://myanimelist.net/anime/1/Cowboy_Bebop/episode/2",
            "forum_url": "https://myanimelist.net/forum/?topicid=29323"
        }
    ]
}
```
(Response truncated for length.)

### vowelShifter method

`vowelShifter(string, vowel)`

#### Usage:
Ever sung that song? "I like to oot, oot, oot, opplos and bononos?" Well, this does that for you. Just provide your string and the vowel you want it to shift to, and you can sing anything vowel-shifted. It changes your string to one, and will return an error if you don't give a vowel, ('a', 'e', 'i', 'o', or 'u' only, sorry 'y' and 'w' fans.) Returns data as a string.

#### Example:
```javascript
vowelShifter("I like to brush my teeth twice a day.", "a")
```

#### Result should be: 
I laka ta brash my taath twaca a day.


### l33tTranslator method

`l33tTranslator(string)`

#### Usage:
Provide a string, returns a new, translated string, or a request for a string if one is not provided. Translates your run-of-the-mill, everyday, boring sentences into l33t, complete with word substitution and an over-abundance of caps and exclamation points. The number that still enjoy this internet gamer language fad is debatable, but don't let that stop you from spamming your Discord or Twitch friends with, "1 @M T3H WINNAR!!! 1 PWN @LL J00 F00LZ!!!" 

#### Example:
```javascript
l33tTranslator("Hello gentleman. I hope you have enjoyed your games, because now you are about to be owned by an elite power gamer.")
```

#### Result should be: 
"H3LL0 G3NTL3M@N. 1 H0P3 J00 H@V3 3NJ0¥'D J00R G@M3S, B3C@US3 N0W J00 @R3 @B0UT T0 B3 PWN'D B¥ @N L33T POWWAH G@M3R."

### tilChristmas method

`tilChristmas().< timeMeasurement >`

#### Usage:
Ever wonder how long until next Christmas? Want to always know on demand? Just run this method, and you can know to the second. Returns an object which gives you the time until Christmas in `.days`, `.hours`, `.minutes`, or `.seconds`, or a string with a combination of them broken down.

#### Example:
```javascript
tilChristmas().timeUntilChristmas
tilChristmas().hours
```

#### Result should be:
```javascript
"As of now, it is 307 days, 4 hours, 14 minutes, and 18.94 seconds until Christmas."
7372.230713611111
```

### searchAnime method

`searchAnime(searchTerm)`

#### Usage:
Just a quick method that searches the MyAnimeList database for your favorite anime. Searches by title, episode name, genre, and more, especially if you add additional tags in your search term parameters (see https://jikan.docs.apiary.io/ for more details). Watch out for CORS issues depending on where you use it and your header settings. Results are the first five matches as JSON.

#### Example:
```javascript
searchAnime("Slime")
```

#### Result should be:

```javascript
{
    "request_hash": "request:search:1556c0fd13856234cf5a008f2a6cd4b940a3ea14",
    "request_cached": false,
    "request_cache_expiry": 432000,
    "results": [
        {
            "mal_id": 37430,
            "url": "https://myanimelist.net/anime/37430/Tensei_shitara_Slime_Datta_Ken",
            "image_url": "https://cdn.myanimelist.net/images/anime/1694/93337.jpg?s=c961d2c4b3cbb600d58e1bac55b4d854",
            "title": "Tensei shitara Slime Datta Ken",
            "airing": false,
            "synopsis": "Thirty-seven-year-old Satoru Mikami is a typical corporate worker, who is perfectly content with his monotonous lifestyle in Tokyo, other than failing to nail down a girlfriend even once throughout hi...",
            "type": "TV",
            "episodes": 24,
            "score": 8.07,
            "start_date": "2018-10-02T00:00:00+00:00",
            "end_date": "2019-03-19T00:00:00+00:00",
            "members": 742766,
            "rated": "PG-13"
        },
        {
            "mal_id": 39551,
            "url": "https://myanimelist.net/anime/39551/Tensei_shitara_Slime_Datta_Ken_2nd_Season",
            "image_url": "https://cdn.myanimelist.net/images/anime/1271/109841.jpg?s=8abec65944244475ed90db5cf43e3c7a",
            "title": "Tensei shitara Slime Datta Ken 2nd Season",
            "airing": true,
            "synopsis": "Second season of Tensei shitara Slime Datta Ken.",
            "type": "TV",
            "episodes": 12,
            "score": 8.06,
            "start_date": "2021-01-12T00:00:00+00:00",
            "end_date": null,
            "members": 332626,
            "rated": "PG-13"
        },
        {
            "mal_id": 38793,
            "url": "https://myanimelist.net/anime/38793/Tensei_shitara_Slime_Datta_Ken_OVA",
            "image_url": "https://cdn.myanimelist.net/images/anime/1116/104615.jpg?s=d5b7b08a8bb81a5a6625654db3d224bf",
            "title": "Tensei shitara Slime Datta Ken OVA",
            "airing": false,
            "synopsis": "The episode bundled with the 13th volume will be about the Sumo competition that held at Tempest for the first time, suggested by Rimuru. The three-part OVA bundled with the 14th, 15th, and 16th manga...",
            "type": "OVA",
            "episodes": 5,
            "score": 7.45,
            "start_date": "2019-07-09T00:00:00+00:00",
            "end_date": "2020-11-27T00:00:00+00:00",
            "members": 124771,
            "rated": "PG-13"
        },
        {
            "mal_id": 39607,
            "url": "https://myanimelist.net/anime/39607/Tensei_shitara_Slime_Datta_Ken__Kanwa_-_Veldora_Nikki",
            "image_url": "https://cdn.myanimelist.net/images/anime/1672/100144.jpg?s=b098b11a465a880b88dadb19035c7d0b",
            "title": "Tensei shitara Slime Datta Ken: Kanwa - Veldora Nikki",
            "airing": false,
            "synopsis": "Ifrit, who has been trapped in Rimuru due to the latter's Predator skill, recaps events of the season while in a discussion with Veldora as they play Shogi.",
            "type": "Special",
            "episodes": 1,
            "score": 6.51,
            "start_date": "2019-03-26T00:00:00+00:00",
            "end_date": "2019-03-26T00:00:00+00:00",
            "members": 68781,
            "rated": "PG-13"
        },
        {
            "mal_id": 41487,
            "url": "https://myanimelist.net/anime/41487/Tensei_shitara_Slime_Datta_Ken_2nd_Season_Part_2",
            "image_url": "https://cdn.myanimelist.net/images/anime/1739/106573.jpg?s=eeed9395e8eb6998d02f97e231d2dc84",
            "title": "Tensei shitara Slime Datta Ken 2nd Season Part 2",
            "airing": false,
            "synopsis": "Second half of Tensei shitara Slime Datta Ken 2nd Season.",
            "type": "TV",
            "episodes": 0,
            "score": 0,
            "start_date": "2021-07-01T00:00:00+00:00",
            "end_date": "2021-09-01T00:00:00+00:00",
            "members": 78591,
            "rated": "PG-13"
        }
    ],
    "last_page": 20
}
```

Thanks!
TT