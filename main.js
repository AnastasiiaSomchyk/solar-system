let data2 = [];

const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML = domString;
};

//Accepts an array of planets as an argument
const buildPlanets = planetData => {
  let planetsHtmlString = "";

  planetData.forEach(planet => {
    if (planet.isGasPlanet) {
      planetsHtmlString += `<div class="planet gas-planet">`;
    } else {
      planetsHtmlString += `<div class="planet no-gas">`;
    }

    planetsHtmlString += `
      <div class="planet-info" data-test="test">
        <img class="planet-image" src="${planet.imageUrl}">
        <h1>${planet.name}</h1>
      </div>`;

    planetsHtmlString += `</div>`;
  });

  printToDom(planetsHtmlString, "solar");
};

function toggleBigPlanetImage(e) {
  //1. I took the event, got the currentTarget from that event, then found the name of the planet I clicked on by working my way down it's children until i got the h1 element that has the name in it.
  const planetName = e.currentTarget.children[0].children[1].textContent;

  //2.  I took the array of planets that I downloaded at the beginning that looks like this...
  // [ {...}, {...}, {name: "Earth", ...}]
  //I *** ITERATE *** through them until I found a planet name that matches the one i clicked on.
  //Whatever planet's name matches the one i clicked on, i store its data.
  //*SEE ARRAY METHODS https://www.codecademy.com/courses/javascript-beginner-en-9Sgpi/0/1
  const planetData = data2.planets.find((planet, index) => {
    console.log("this is a planet object", planet, " index: ", index);
    return planetName === planet.name;
  });

  //3.  I find the container that I have hidden when i loaded the page.
  const imageContainer = document.getElementById("fullscreen-image-container");

  //4.  I add a class to it that changes display:none to display:flex and also has an animation on it.
  imageContainer.classList.add("show-big-image");

  //5.  I get the container nested inside "fullscreen-image-contianer" by id.
  const dynamicContentContainer = document.getElementById(
    "dynamic-content-container"
  );

  //6.  I past the planet data i found into the createPlanetHTML function, and then
  // I set that as the inner HTML of the "dynamic-content-container" div.
  dynamicContentContainer.innerHTML = createPlanetHTML(planetData);
}

function createPlanetHTML(planet) {
  return `
  <div class="${planet.isGasPlanet ? "gas-planet" : "no-gas"}">
    <img class="bigest-image" src="${planet.imageUrl}">
    <h2>${planet.name}</h2>
    <p>Number of Moons ${planet.numberOfMoons}</p>
    <p>Largest Moon is ${planet.nameOfLargestMoon}</p>
    <p>${planet.description}</p>
  </div>`;
}

const addPlanetClicked = () => {
  let mouseOverPlanet = document.getElementsByClassName("planet");
  console.log("moveOverPlanet:", mouseOverPlanet.length);

  for (let i = 0; i < mouseOverPlanet.length; i++) {
    mouseOverPlanet[i].addEventListener("click", toggleBigPlanetImage);
  }
};

//do xhr and store in variable
function executeThisCodeIfXHRFails() {
  console.log("An error occurred");
}

function executeThisCodeAfterFileLoaded() {
  const data = JSON.parse(this.responseText);
  data2 = data;
  buildPlanets(data.planets); // BUILD YOUR DOMSTRING HERE
  addPlanetClicked();
}

const hideBigImageContainer = () => {
  const imageContainer = document.getElementById("fullscreen-image-container");
  imageContainer.classList.remove("show-big-image");

  const dynamicContentContainer = document.getElementById(
    "dynamic-content-container"
  );
  dynamicContentContainer.innerHTML = "";
};

const startApplication = () => {
  var myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
  myRequest.addEventListener("error", executeThisCodeIfXHRFails);
  myRequest.open("GET", "planet.json");
  myRequest.send();

  //1. store close button element in variable
  let closeButton = document.getElementById("close-big-planet-image-button");
  closeButton.addEventListener("click", hideBigImageContainer);
};

startApplication();

//1.  XHR request to load planet json data.
//2.  After data loads, #executeThisCodeAfterFileLoaded runs.
//    a.  This method executes buildPlanets which takes my array of planets and builds each HTML element for it.
