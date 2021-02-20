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
const vowelShifter = (str, vowel) => {
  function isVowel(x) {
    var result;
    result = x == "A" || x == "E" || x == "I" || x == "O" || x == "U";
    return result;
  }
   if(isVowel(vowel.toUpperCase()) === false) {
    console.log("Please provide a vowel.")
    return "Please provide a vowel."
   }
  let theStrings = str.split("");
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

vowelShifter("I like to eat apples and bananas", "1");

const l33tTranslator = (str) => {
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
    .replaceAll("M3 T00", "M2");

  console.log(theL33t);
};

l33tTranslator("DUDE, THAT SUCKS.");
