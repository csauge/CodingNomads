writeRandomQuote = function () {
    let quotes = [
    "Patience is bitter, but its fruit is sweet - Aristotle",
    "Difficult things in the world, must have their beginnings in the easy. - Lao Tzu",
    "The two most powerful warriors are patience and time. - Leo Tolstoy",
    "It is easier to find men who will volunteer to die. Than to find those who are willing to endure pain with patience. - Julius Caesar"
  ]
    let rand = Math.floor(Math.random()*quotes.length);
    document.getElementById("quote").innerText = quotes[rand];
  }

function copyDate() {
  let footer = document.getElementById("copyright")
  let copyrightText = "Copyright Christophe Saugé ©" + new Date().getFullYear()
  footer.innerText = copyrightText
}

copyDate();
writeRandomQuote();

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 48.82631195621006, lng: 2.344585955142975 },
    zoom: 8,
  });
}

async function getLocation() {
  let response = await fetch('https://velib-metropole-opendata.smoove.pro/opendata/Velib_Metropole/station_information.json');
  let data = await response.json();
  document.getElementById("location").innerText = JSON.stringify(data["data"]["stations"][0]);
}
getLocation();