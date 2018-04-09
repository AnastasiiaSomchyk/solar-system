# solar-system

## Setup
1. Create a new repository on GitHub
2. Connect the repository with a directory in single-page-apps/exercises
3. Create a GitHub project and thoroughly plan out the project, breaking it into well-documented tickets.
4. After pushing your base README.md to master, you should be working off branches
5. Create an index.html, main.js and main.css and link them all together.
## Technical Requirements
1. Single responsibility prinicple: Each function should be responsible for one thing.
2. No frameworks or libraries (Bootstrap/Materialize, jQuery, etc); everything is vanilla
## Requirements
1. Create a file called planets.json and fill it with information on each of the 8 planets in our solar system. Each planet should have the following keys:
* name
* imageUrl
* description
* isGasPlanet (true/fales)
* numberOfMoons
* nameOfLargestMoon
2. Create an XHR request that loads planets.json and displays them as cards with the planet name centered Solar System Mockup
<img width="521" alt="solarsystem1" src="https://user-images.githubusercontent.com/34519885/38505488-e7e4261a-3bdc-11e8-9d4f-d3a93698bf62.png">
3. When the user moves their mouse over a planet card the name should dissapear and the image of the planet should take up the whole card.
4. When the user clicks on a planet card all the cards dissapear and the only thing displayed on the page is information about the planet they clicked on. Solar System Mockup
<img width="466" alt="solarsystem2" src="https://user-images.githubusercontent.com/34519885/38505496-ed5f209a-3bdc-11e8-9f2f-b80fca5fcca5.png">
5. When the user clicks on the red X on a single planet that information goes away and all the original cards are displayed again.
6. When the user types in the search bar, planet cards should only show up if they have what is typed in their name or description.
