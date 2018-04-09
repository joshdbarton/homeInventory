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

//function that saves database to local storage
const saveDatabase = function (databaseObject, localStorageKey) {
    localStorage.setItem(localStorageKey, JSON.stringify(databaseObject))
}

//function that loads database from the string on local storage
const loadDatabase = function (localStorageKey) { 
    return JSON.parse(localStorage.getItem(localStorageKey))
}

// Persist the database to localStorage
saveDatabase(HomeInventoryDatabase, "HomeInventory")