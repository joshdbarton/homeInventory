const HomeInventoryDatabase = {}

HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.crafts = []
HomeInventoryDatabase.electronics = []

//constructor function to make items
  function ItemCreator (name, location, description) {
      this.name = name;
      this.location = location;
      this.description = description;
  }

//function to add to the database
// const itemAdder = (database, category, name, location, description,) => {
//     const newItem = new ItemCreator (name, location, description );
//     [database][category].push(newItem);
// }

//electronics items
const iMac = new ItemCreator('iMac', 'bedroom', 'shiny new iMac' );
const nest = new ItemCreator('nest', 'entryway', 'thermostat');
const babyMonitor = new ItemCreator('baby monitor', 'baby room', 'old iPhone');
HomeInventoryDatabase.electronics.push(iMac)
HomeInventoryDatabase.electronics.push(nest)
HomeInventoryDatabase.electronics.push(babyMonitor)

//craft items
const babyFeet = new ItemCreator("Levi's footprints", 'baby room', 'footprint painting');
const paperCut = new ItemCreator('paper cut project', 'living room', 'paper cut artwork');
const quilt = new ItemCreator('wedding quilt', 'bedroom', 'multi-colored quilt');
HomeInventoryDatabase.crafts.push(babyFeet)
HomeInventoryDatabase.crafts.push(paperCut)
HomeInventoryDatabase.crafts.push(quilt)

// furniture items
const couch = new ItemCreator('vintage sofa', 'living room', 'light-blue vintage sofa');
const table = new ItemCreator('1940s dining set', 'dining room', 'cherry wood with gloss finish');
const chair = new ItemCreator('captains chair', 'living room', 'nut brown leather chair');
const coffeeTable = new ItemCreator('coffee table', 'living room', 'cherry coffee table with glass top');
HomeInventoryDatabase.furniture.push(couch)
HomeInventoryDatabase.furniture.push(table)
HomeInventoryDatabase.furniture.push(chair)
HomeInventoryDatabase.furniture.push(coffeeTable)


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