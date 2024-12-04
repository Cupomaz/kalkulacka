const planetElements = document.querySelectorAll(".planet");

planetElements.forEach(p => {
    p.addEventListener("input", e => {
        let inputPlanetName = e.target.id;
        calculator.calcMass(Number(e.target.value), inputPlanetName);
        calculator.calcWeight();
        calculator.updateInputs();
    })
})

let calculator = {
    mass: 0,
    lastInput: null,
    planets: [
        {
            name: "earth",
            acc: 9.81,
            weight: 0,
        },
        {
            name: "mercury",
            acc: 3.7,
            weight: 0
        },
        {
            name: "venus",
            acc: 8.87,
            weight: 0
        },
        {
            name: "mars",
            acc: 3.73,
            weight: 0
        },
        {
            name: "jupiter",
            acc: 25.93,
            weight: 0
        },
        {
            name: "saturn",
            acc: 11.19,
            weight: 0
        },
        {
            name: "uranus",
            acc: 9.01,
            weight: 0
        },
        {
            name: "neptune",
            acc: 11.28,
            weight: 0
        }
    ],
    
    getPlanetByName: function(name){
        const planet = this.planets.find(e => e.name == name);
        return planet;
    },

    calcMass: function(weight, planetName){
        const planet = this.getPlanetByName(planetName);
        planet.weight = weight;
        this.mass = weight / planet.acc;
        this.lastInput = planetName;
    },

    calcWeight: function(){
        this.planets.forEach(e => {
            if(e.name != this.lastInput){
                e.weight = this.mass * e.acc;
            }
        })
    },

    updateInputs: function(){
        this.planets.forEach(p => {
            if(p.name != this.lastInput){
                document.getElementById(p.name).value = p.weight.toFixed(2);
            }
        })
    }
};