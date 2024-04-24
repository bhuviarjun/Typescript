"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var foods = [
    {
        name: 'Rice',
        nutrients: [
            { name: 'Carbohydrates', value: 25 },
            { name: 'Protein', value: 3 },
            { name: 'Fat', value: 0.3 },
            { name: 'Fiber', value: 1 }
        ]
    },
    {
        name: 'Chicken',
        nutrients: [
            { name: 'Carbohydrates', value: 0 },
            { name: 'Protein', value: 20 },
            { name: 'Fat', value: 5 },
            { name: 'Fiber', value: 0 }
        ]
    },
    {
        name: 'Apple',
        nutrients: [
            { name: 'Carbohydrates', value: 20 },
            { name: 'Protein', value: 0.5 },
            { name: 'Fat', value: 0.3 },
            { name: 'Fiber', value: 3 }
        ]
    },
    {
        name: 'Banana',
        nutrients: [
            { name: 'Carbohydrates', value: 27 },
            { name: 'Protein', value: 1.3 },
            { name: 'Fat', value: 0.4 },
            { name: 'Fiber', value: 3 }
        ]
    },
    {
        name: 'Broccoli',
        nutrients: [
            { name: 'Carbohydrates', value: 7 },
            { name: 'Protein', value: 2.8 },
            { name: 'Fat', value: 0.4 },
            { name: 'Fiber', value: 2.6 }
        ]
    },
    {
        name: 'Juice',
        nutrients: [
            { name: 'Carbohydrates', value: 20 },
            { name: 'Protein', value: 0 },
            { name: 'Fat', value: 0 },
            { name: 'Fiber', value: 0.5 }
        ]
    },
    {
        name: 'Samosa',
        nutrients: [
            { name: 'Carbohydrates', value: 15 },
            { name: 'Protein', value: 3 },
            { name: 'Fat', value: 10 },
            { name: 'Fiber', value: 1 }
        ]
    },
    {
        name: 'Noodles',
        nutrients: [
            { name: 'Carbohydrates', value: 35 },
            { name: 'Protein', value: 5 },
            { name: 'Fat', value: 2 },
            { name: 'Fiber', value: 2 }
        ]
    },
    // Add more foods here...
];
var MAX_CARBOHYDRATES = 50;
var MAX_FAT = 20;
function combineNutrients(foods) {
    var combinedNutrients = {};
    foods.forEach(function (food) {
        food.nutrients.forEach(function (nutrient) {
            if (!combinedNutrients[nutrient.name]) {
                combinedNutrients[nutrient.name] = nutrient.value;
            }
            else {
                combinedNutrients[nutrient.name] += nutrient.value;
            }
        });
    });
    return combinedNutrients;
}
function main() {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question("Select foods (comma-separated, e.g., Rice, Chicken): ", function (input) {
        var selectedFoods = input.split(',').map(function (item) { return item.trim(); });
        var selectedFoodObjects = selectedFoods.map(function (foodName) {
            var food = foods.find(function (food) { return food.name.toLowerCase() === foodName.toLowerCase(); });
            if (!food) {
                console.log("Food \"".concat(foodName, "\" not found."));
            }
            return food;
        }).filter(Boolean);
        if (selectedFoodObjects.length > 0) {
            var combinedNutrients = combineNutrients(selectedFoodObjects);
            console.log('Combined Nutrient Information:');
            Object.entries(combinedNutrients).forEach(function (_a) {
                var name = _a[0], value = _a[1];
                console.log("".concat(name, ": ").concat(value));
            });
            if (combinedNutrients['Carbohydrates'] > MAX_CARBOHYDRATES) {
                console.log('Warning: Excessive carbohydrate intake may lead to weight gain and other health issues.');
            }
            if (combinedNutrients['Fat'] > MAX_FAT) {
                console.log('Warning: Excessive fat intake may lead to obesity and other health issues.');
            }
        }
        else {
            console.log('No valid foods selected.');
        }
        rl.close();
    });
}
main();
