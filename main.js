
// "name":"Uranus",
// "imageUrl": "https://solarsystem.nasa.gov/system/stellar_items/list_view_images/69_uranus_480x320.jpg",
// "description":"Uranus The seventh planet from the sun with the third largest diameter in our solar system, Uranus is very cold and windy.",
// "isGasPlanet":true,
// "numberOfMoons":27,
// "nameOfLargestMoon":"Titania"


const printToDom = (domString, divId) => {
        document.getElementById(divId).innerHTML = domString;
};
  
const buildDomString = (solarArray) => {
        console.log(solarArray);
    let domString = "";
        solarArray.forEach((planet) => {
                let planetName = planet.name.toLowerCase();
                domString += `<div class="planet" id="${planetName}">`;
                domString += `<img class="planet-image" src="${planet.imageUrl}">`;
                domString += `<h1>${planet.name}</h1>`;
                domString += `<h3>Number of moons ${planet.numberOfMoons}</h3>`;
                domString += `<p>largest Moon - ${planet.nameOfLargestMoon}</p>`;
                domString += `<p>${planet.description}</p>`;
                domString += `</div>`;
        });
printToDom(domString, "solar");

};


//do xhr and store in variable
function executeThisCodeIfXHRFails () {  
        console.log("An error occurred");
       }
       
function executeThisCodeAfterFileLoaded () {  
        const data = JSON.parse(this.responseText);
        buildDomString(data.planets); // BUILD YOUR DOMSTRING HERE

}
       
const startApplication = () => {
       var myRequest = new XMLHttpRequest();
       myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
       myRequest.addEventListener("error", executeThisCodeIfXHRFails);
       myRequest.open("GET", "planet.json");
       myRequest.send();

};
       



startApplication();