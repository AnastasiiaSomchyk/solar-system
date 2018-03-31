
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

        if (planet.isGasPlanet) {
                domString += `<div class="planet gas-planet">`;
        } else {
                domString += `<div class="planet no-gas">`;
        }
                      
     

      

        domString += `
                <div class="planet-info">
                        <img class="planet-image" src="${planet.imageUrl}">
                        <h1>${planet.name}</h1>
                        <h3>Number of moons ${planet.numberOfMoons}</h3>
                        <p>largest Moon - ${planet.nameOfLargestMoon}</p>
                        <p>${planet.description}</p>
                </div>
        
        `

        domString += `
                <div class="hidden-planet">
                        <img class="planet-image" src="${planet.imageUrl}"></div>
                </div>
        `

});
printToDom(domString, "solar");

};


function togglePlanet(e){

        let planetInfo = e.currentTarget.children[0]
        let planetImage = e.currentTarget.children[1]

        console.log(planetInfo.classList)
        let isHovered = planetImage.classList.contains("hover-planet")

        if(isHovered){
                planetInfo.classList.remove("hidden-planet");
                planetImage.classList.add("hidden-planet");
                
        }

        planetImage.classList.remove("hidden-planet");
        planetInfo.classList.add("hidden-planet");
        
}


const addHoverEventListener = () =>{
        let mouseOverPlanet = document.getElementsByClassName("planet");
        console.log("moveOverPlanet:", mouseOverPlanet.length)
      
        for( let i = 0; i < mouseOverPlanet.length; i++) {
              
                ["mouseover","mouseout"].forEach((eventType) =>{
                        mouseOverPlanet[i].addEventListener(eventType, togglePlanet);  
                })
              
        }    
};





//do xhr and store in variable
function executeThisCodeIfXHRFails () {  
        console.log("An error occurred");
       }
       
function executeThisCodeAfterFileLoaded () {  
        const data = JSON.parse(this.responseText);
        buildDomString(data.planets); // BUILD YOUR DOMSTRING HERE
        addHoverEventListener();

}
       
const startApplication = () => {
       var myRequest = new XMLHttpRequest();
       myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
       myRequest.addEventListener("error", executeThisCodeIfXHRFails);
       myRequest.open("GET", "planet.json");
       myRequest.send();
       
};
       



startApplication();
