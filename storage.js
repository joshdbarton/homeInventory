const HomeInventoryDatabase = {}

HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.crafts = []
HomeInventoryDatabase.electronics = []

//function that creates a new item and pushes it to the database
const itemAdder = (database, category, name, location, description) => {
    const newItem = {'name': name, 'location': location, 'description': description};
    database[category].push(newItem);
 }


//electronics items
itemAdder(HomeInventoryDatabase, 'electronics', 'iMac', 'bedroom', 'shiny new iMac' );
itemAdder(HomeInventoryDatabase, 'electronics', 'nest', 'entryway', 'thermostat');
itemAdder(HomeInventoryDatabase, 'electronics', 'baby monitor', 'baby room', 'old iPhone');

//craft items
itemAdder(HomeInventoryDatabase, 'crafts', "Levi's footprints", 'baby room', 'footprint painting');
itemAdder(HomeInventoryDatabase, 'crafts', 'paper cut project', 'living room', 'paper cut artwork');
itemAdder(HomeInventoryDatabase, 'crafts', 'wedding quilt', 'bedroom', 'multi-colored quilt');

// furniture items
itemAdder(HomeInventoryDatabase, 'furniture', 'LOVESEAT', 'living room', 'light-blue vintage sofa');
itemAdder(HomeInventoryDatabase, 'furniture', '1940s dining set', 'dining room', 'cherry wood with gloss finish');
itemAdder(HomeInventoryDatabase, 'furniture', 'captains chair', 'living room', 'nut brown leather chair');
itemAdder(HomeInventoryDatabase, 'furniture', 'coffee table', 'living room', 'cherry coffee table with glass top');


const saveDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

// Persist the database to localStorage
saveDatabase(HomeInventoryDatabase, "HomeInventory")