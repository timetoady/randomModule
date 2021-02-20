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
  
  