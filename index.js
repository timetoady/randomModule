const fetch = require("node-fetch");
//Basic async/await API call that uses a try/catch block and console.errors any errors received.
//Requires endpoint URL, API method (GET, POST, PUT, etc), and a modifier to call the API from different endpoints of the URL.
//Method and modifier default to "GET" and "" (respectively) if unspecified.
//Returns data as JSON.
async function tryCatch(
  URL,
  method = "GET",
  headers = {},
  modifier = ""
) {
  try {
    const response = await fetch(URL + `${modifier}`, {
      method: method,
      headers: headers,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

//Shifts vowels for the Ay-pels and be-ney-neys fun.
const vowelShifter = (str, vowel) => {

  function isVowel(x) {
    var result;
    result = x == "A" || x == "E" || x == "I" || x == "O" || x == "U";
    return result;
  }
  if (isVowel(vowel.toUpperCase()) === false) {
    return "Please provide a vowel.";
  }
  let theStrings = str.toString().split("");
   let newString = "";
  theStrings.forEach((string) => {
    if (
      string === "a" ||
      string === "e" ||
      string === "i" ||
      string === "o" ||
      string === "u"
    ) {
      newString += vowel;
    } else {
      newString += string;
    }
  });
  return newString;
};


//Translates your string in to l33t. 
const l33tTranslator = (theString) => {
  if (typeof theString !== "string") return "Please provide a string, d00d."
  let theL33t = theString.toUpperCase()
    .replace(/DUDE/g, "D00D")
    .replace(/YOU/g, "J00")
    .replace(/OKAY/g, "KK")
    .replace(/OK/g, "KK")
    .replace(/OWN/g, "PWN")
    .replace(/FEAR/g, "PH33R")
    .replace(/THE/g, "T3H")
    .replace(/HACKER/g, "H4X0R")
    .replace(/CENSORED/g, "C3N50R3D")
    .replace(/CENSOR/g, "C3N50R")
    .replace(/YAY/g, "W00T")
    .replace(/WOOHOO/g, "W00T")
    .replace(/GOOD LUCK/g, "GL")
    .replace(/HA! /g, " R0FZ ")
    .replace(/WAS/g, "WUZ")
    .replace(/CKS/g, "X")
    .replace(/S /g, "Z ")
    .replace(/S\./g, "Z.")
    .replace(/S!/g, "Z!")
    .replace(/S\?/g, "Z?")
    .replace(/SZ/g, "SS")
    .replace(/ED /g, "'D ")
    .replace(/ED\./g, "'D.")
    .replace(/A/g, "@")
    .replace(/E/g, "3")
    .replace(/I/g, "1")
    .replace(/O/g, "0")
    .replace(/!/g, "!!!")
    .replace(/Y/g, "¥")
    .replace(/N0 W@¥/g, "NOWAI")
    .replace(/S33 ¥0U/g, "CYA")
    .replace(/¥3S/g, "YASS")
    .replace(/P0W3R/g, "POWWAH")
    .replace(/W1NN3R/g, "WINNAR")
    .replace(/L33T SUX/g, "L33T RULZ")
    .replace(/RUL3S/g, "RULZ")
    .replace(/L0L/g, "LOPL")
    .replace(/3L1T3/g, "L33T")
    .replace(/L1K3/g, "LIEK")
    .replace(/@ND/g, "ND")
    .replace(/B¥3/g, "BAI")
    .replace(/M3 T00/g, "M2")
    .replace(/W0RST/g, "WURST")
    .replace(/1Z/g, "1S")
    .replace(/N3'D/g, "N33D")
    .replace(/C00L/g, "KEWL")
    .replace(/SM@RT/g, "SMAT")
    .replace(/MAX/g, "MAX0R")
    .replace(/M0R3/g, "MOAR")
    .replace(/P0RN/g, "PRON")
    .replace(/G1RL/g, "GURL")
    .replace(/ H1 /g, " HAI ")
  return theL33t;
};

//returns how many days until Christmas
const tilChristmas = () => {
  let thePresentTime = new Date();
  let theYear = thePresentTime.getFullYear();
  let christmas = new Date(`December 25, ${theYear} 00:00:00`);
  let timeTilChristmas = christmas.getTime() - thePresentTime.getTime();
  let daysTilChristmas = timeTilChristmas / (1000 * 3600 * 24);
  let hoursTilChristmas = timeTilChristmas / (1000 * 3600);
  let minutesTilChristmas = timeTilChristmas / (1000 * 60);
  let secondsTilChristmas = timeTilChristmas / 1000;
  let theDays = Math.trunc(daysTilChristmas);
  let theHoursInDays = (daysTilChristmas - theDays) * 24;
  let theHours = Math.trunc(theHoursInDays);
  let theMinutesinHours = (theHoursInDays - theHours) * 60;
  let theMinutes = Math.trunc(theMinutesinHours);
  let theSecondsInMinutes = (theMinutesinHours - theMinutes) * 60;
  let theSeconds = theSecondsInMinutes.toFixed(2);

  let fullCountdown = {
    days: daysTilChristmas,
    hours: hoursTilChristmas,
    minutes: minutesTilChristmas,
    seconds: secondsTilChristmas,
    timeUntilChristmas: `As of now, it is ${theDays} days, ${theHours} hours, ${theMinutes} minutes, and ${theSeconds} seconds until Christmas.`,
  };
  return fullCountdown;
};

const searchAnime = (searchTerm) => {
  const animeEndpoint = "https://api.jikan.moe/v3/search/anime/";
  let query = `?q=${searchTerm}&limit=5`;
  let theHeader = {
    "Access-Control-Allow-Origin": "*";
    "Content-Type": "application/json"
  }
  const searchedAnime = tryCatch(animeEndpoint, "GET", theHeader, query);
  return searchedAnime;
};

module.exports = {
  tryCatch,
  vowelShifter,
  l33tTranslator,
  tilChristmas,
  searchAnime,
}