function getExcahngeRate(currency, callback) {
  const url = "https://api.exchangeratesapi.io/latest?base=INR";
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      try {
        const response = JSON.parse(xmlHttp.responseText);
        console.log(response);
        callback(response.rates[currency]);
      } catch (e) {
        console.log(e);
        callback("ERROR");
      }
    } else {
      //callback("ERROR");
    }
  };
  xmlHttp.open("GET", url, true); // true for asynchronous
  xmlHttp.send(null);
}

export default getExcahngeRate;
