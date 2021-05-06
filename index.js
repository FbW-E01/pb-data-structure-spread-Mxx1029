// 1. Combining Arrays

let euroCountries = ["Finland", "Norway", "Denmark", "Sweden"];
const asianCountries = ["Indonesia", "Bhutan", "Mongolia", "Sri Lanka"];

euroCountries = [...euroCountries, ...asianCountries];
console.log(euroCountries);

const vegetables = ["Tomatoes", "Potatoes", "Cucumbers"];

const fruits = ["Apples", "Bananas", "Lemons"];

const plants = [...vegetables, ...fruits];
console.log(plants);

// 2. Copying Arrays

const array = [1, 2, 3, 4, 5];

const newArray = [...array];
console.log(newArray);

// 3. Find the Largest...

const largestNum = (arr) => Math.max(...array);
console.log(largestNum(array));

// 4. Find the Smallest

const smallestNum = (arr) => Math.min(...array);
console.log(smallestNum(array));

// 5. Clone and Merge

const person = {name: "John"};
const job = {role: "Teacher"};

// 5.1
const person2 = {...person};
console.log(person2);
// 5.2
const employee = {...person, ...job};
console.log(employee);
// 5.3
employee.name = "Jim";
employee.role = "Filmmaker";
console.log(employee);

// Bonus 6:

const isWhole = (a, b, c, d) => {
    const sum = a + b + c + d;
    const average = sum / 4;
    if (average % 1 === 0) {
        return true;
    } else {
        return false;
    };
};

// console.log(isWhole(2, 3, 5, 2));
// doesn't work if input is an array, we need to loop through the array
// ---- it does, like this:
console.log(isWhole(...[2, 3, 5, 2]));

const isWhole2 = (...array) => {
    let sum = 0;
    for (const element of array) {
        sum += element;
    };
    const average = sum / array.length;
    if (average % 1 === 0) {
        return true;
    } else {
        return false;
    };
};

console.log(isWhole2(...[2, 3, 5, 2]));