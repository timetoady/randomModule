//Basic async/await API call that uses a try/catch block and console.errors any errors received.
//Requires endpoint URL, API method (GET, POST, PUT, etc), and a modifier to call the API from different endpoints of the URL.
//Method and modifier default to "GET" and "" (respectively) if unspecified.
//Returns data as JSON.
export async function tryCatch(
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
export const vowelShifter = (str, vowel) => {

  function isVowel(x) {
    var result;
    result = x == "A" || x == "E" || x == "I" || x == "O" || x == "U";
    return result;
  }
  if (isVowel(vowel.toUpperCase()) === false) {
    console.log("Please provide a vowel.");
    return "Please provide a vowel.";
  }
  let theStrings = str.toString().split("");
  console.log(theStrings);
  let newString = "";
  theStrings.forEach((string) => {
    console.log(string);
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
  console.log(newString);
  return newString;
};


//Translates your string in to l33t. 
export const l33tTranslator = (str) => {
  if (typeof str !== "string") return "Please provide a string, d00d."
  let theL33t = str
    .toUpperCase()
    .replaceAll("DUDE", "D00D")
    .replaceAll("PORN", "PRON")
    .replaceAll("GIRL", "GURL")
    .replaceAll(" HI ", " HAI ")
    .replaceAll("YOU", "J00")
    .replaceAll("COOL", "KEWL")
    .replaceAll("OKAY", "KK")
    .replaceAll("OK", "KK")
    .replaceAll("SMART", "SMAT")
    .replaceAll("MAX", "MAX0R")
    .replaceAll("OWN", "PWN")
    .replaceAll("FEAR", "PH33R")
    .replaceAll("THE", "T3H")
    .replaceAll("M0R3", "MOAR")
    .replaceAll("HACKER", "H4X0R")
    .replaceAll("CENSORED", "C3N50RED")
    .replaceAll("YAY", "W00T")
    .replaceAll("WOOHOO", "W00T")
    .replaceAll("GOOD LUCK", "GL")
    .replaceAll(" HA! ", " R0FZ ")
    .replaceAll("WAS", "WUZ")
    .replaceAll("CKS", "X")
    .replaceAll("S ", "Z ")
    .replaceAll("S.", "Z.")
    .replaceAll("S!", "Z!")
    .replaceAll("S?", "Z?")
    .replaceAll("SZ", "SS")
    .replaceAll("ED ", "'D ")
    .replaceAll("ED.", "'D.")
    .replaceAll("A", "@")
    .replaceAll("E", "3")
    .replaceAll("I", "1")
    .replaceAll("O", "0")
    .replaceAll("!", "!!!")
    .replaceAll("Y", "¥")
    .replaceAll("NO WAY", "NOWAI")
    .replaceAll("S33 Y0U", "CYA")
    .replaceAll("Y3S", "YASS")
    .replaceAll("P0W3R", "POWWAH")
    .replaceAll("W1NN3R", "WINNAR")
    .replaceAll("L33T SUX", "L33T RULZ")
    .replaceAll("RUL3S", "RULZ")
    .replaceAll("L0L", "LOPL")
    .replaceAll("3L1T3", "L33T")
    .replaceAll("L1K3", "LIEK")
    .replaceAll("@ND", "ND")
    .replaceAll("B¥3", "BAI")
    .replaceAll("M3 T00", "M2")
    .replaceAll("W0RST", "WURST");
  return theL33t;
};


//returns how many days until Christmas
export const tilChristmas = () => {
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

export const searchAnime = (searchTerm) => {
  const animeEndpoint = "https://api.jikan.moe/v3/search/anime/";
  let query = `?q=${searchTerm}&limit=5`;
  let theHeader = {
    "Access-Control-Allow-Origin": "*"
  }
  const searchedAnime = tryCatch(animeEndpoint, "GET", theHeader, query);
  return searchedAnime;
};