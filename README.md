# randomModule
 My first NPM module with some random methods to try it out.

#### This module is a random group of methods just to get my feet wet in making my own node modules. There will be some useful ones (like a easy try/catch fetch for REST APIs) and some other random stuff. 

## tryCatch method

`tryCatch(URL, method, headers, modifier)`

Usage:
A basic async/await API call that uses a try/catch block and console.errors any errors received. Requires endpoint URL. You can specify headers, an API method (GET, POST, PUT, etc.), and also optionally modifier to call the API from different endpoints of the URL. Method and modifier default to `GET` and `""` (respectively) if unspecified, and headers defaults to `{}`. Returns data as JSON.

Example:

```javascript
    //In an async function.
    const jikanCoboywBebopAPI = "https://api.jikan.moe/v3/anime/1/episodes"
    const result = await tryCatch(jikanCoboywBebopAPI, "GET", {}, ".episodes") 
    console.log(result)
```
Result should be:

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
        },
        {
            "episode_id": 3,
            "title": "Honky Tonk Women",
            "title_japanese": "ホンキィ・トンク・ウィメン",
            "title_romanji": "Honky Tonk Women ",
            "aired": "1998-04-10T00:00:00+00:00",
            "filler": false,
            "recap": false,
            "video_url": "https://myanimelist.net/anime/1/Cowboy_Bebop/episode/3",
            "forum_url": "https://myanimelist.net/forum/?topicid=29334"
        },
        {
            "episode_id": 4,
            "title": "Gateway Shuffle",
            "title_japanese": "ゲイトウェイ・シャッフル",
            "title_romanji": "Gateway Shuffle ",
            "aired": "1998-11-14T00:00:00+00:00",
            "filler": false,
            "recap": false,
            "video_url": "https://myanimelist.net/anime/1/Cowboy_Bebop/episode/4",
            "forum_url": "https://myanimelist.net/forum/?topicid=50217"
        },
        {
            "episode_id": 5,
            "title": "Ballad of Fallen Angels",
            "title_japanese": "堕天使たちのバラッド",
            "title_romanji": "Datenshi-tachi no Ballad ",
            "aired": "1998-11-21T00:00:00+00:00",
            "filler": false,
            "recap": false,
            "video_url": "https://myanimelist.net/anime/1/Cowboy_Bebop/episode/5",
            "forum_url": "https://myanimelist.net/forum/?topicid=22879"
        }
    ]
}
```
etc. Response truncated for length.