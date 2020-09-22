var parks = {},
    streets = {};

/**
 * ## Add Location
 * @param {string} type -> 'park' or 'street'
 * @param {string} name -> name of park or street
 * @param {number} buildYear -> year street or park was founded
 * @param {number} numTrees -> number of trees
 * @param {number} area -> area in sq miles
 */
function addLocation(type, name, buildYear, numTrees, area) {
    let info = {
        buildYear: buildYear,
        numTrees: numTrees,
        area: area,
        density: numTrees / area,
        age: 2020 - buildYear,
    };
    type === "park" ? (parks[name] = info) : (streets[name] = info);
}

/**
 * ## Printer Functions in one module for easy logging
 */
class Printer {
    constructor() {
        this.description = "handles console logging";
    }
    /**
     * ## Describe All Streets
     */
    descAllStreets() {
        Object.keys(streets).map((streetname)=>{
            let street = streets[streetname]
            if (street.area <= 500) {
                street.size = "large";
            } else if (street.area <= 1000) {
                street.size = "medium";
            } else if (street.area <= 1500) {
                street.size = "large";
            } else {
                street.size = "giant";
            }
            console.log(
                `${streetname} built in ${street.buildYear} is a ${street.size} street`
            );
        })
    }

    /**
     * ## Describe All Parks - logs all parks
     */
    descAllParks() {
        Object.keys(parks).map((park) => {
            console.log(
                `${park} has a tree density of ${parks[park].density} trees / sq mile`
            );
        });
    }
    /**
     * ## Logs densest park with info
     */
    densestPark() {
        let parkNames = Object.keys(parks);
        let densest = parkNames.reduce((a, b) => {
            return parks[a].density > parks[b].density ? a : b;
        });
        // },  parkNames[0]);
        console.log(
            `${densest} is the most dense with a density of ${parks[densest].density} trees / sq mile`
        );
    }
    /**
     * ## Logs all parks with density over 1000
     */
    denseOverThousand() {
        let parkNames = Object.keys(parks);
        let overThousand = parkNames.reduce((acc, name) => {
            parks[name].numTrees >= 1000 ? acc.push(name) : null;
            return acc;
        }, []);
        overThousand.map((name) => console.log(`${name} has over 1000 trees`));
    }
    /**
     * ## Logs the average age of all streets
     */
    avgStreetAge() {
        let avg =
            Object.keys(streets).reduce((a, b) => a + streets[b].age, 0) /
            Number(Object.keys(streets).length);
        console.log(`The average age of the streets is ${avg}`);
    }
}

/**
 * ## Initializes Reports
 */
function init() {
    console.log("\n");
    addLocation("park", "National Park", 1990, 1200, 300);
    addLocation("park", "Greenboro Park", 1991, 1200, 300);
    addLocation("park", "Salsbing Park", 1991, 1200, 300);
    addLocation("street", "Oglethorpe Ave", 1975, 1100, 2200);
    addLocation("street", "Main Street", 1985, 1150, 2900);
    addLocation("street", "Fleet Street", 1985, 1150, 2900);

    console.log("----Park Report----");
    px.descAllParks();
    px.densestPark();
    px.denseOverThousand();

    console.log("\n----Street Report----");
    px.avgStreetAge();
    px.descAllStreets();

    console.log("\n");
}
const px = new Printer();
init();
