// Function to count the frequency of elements in an array
function countFlavors(flavors) {
    let flavorCount = {};

    for (let i = 0; i < flavors.length; i++) {
        let flavor = flavors[i].trim();
        flavorCount[flavor] = (flavorCount[flavor] || 0) + 1;
    }

    return flavorCount;
}

// Prompt the user for froyo flavors
const userInput = prompt("Enter a list of comma-separated froyo flavors:");

// Split the user's input into an array of flavors
const flavorsArray = userInput.split(',');

// Count the number of each flavor using the countFlavors function
const flavorCounts = countFlavors(flavorsArray);

// Display the result in a format similar to the provided dinner object
console.log("Froyo Orders:");
console.log(Object.keys(flavorCounts));
console.log(Object.values(flavorCounts));

let totalOrders = 0;

for (const individualFlavor in flavorCounts) {
    totalOrders += flavorCounts[individualFlavor];
}

console.log("Total Orders:", totalOrders);

function calculateOrdersCount(orders) {
    let total = 0;
    for (const flavor in orders) {
        total += orders[flavor];
    }
    return total;
}

console.log("Total Orders from Function:", calculateOrdersCount(flavorCounts));