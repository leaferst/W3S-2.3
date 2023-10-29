/*Q1: 
1. Create an array called grades and put the following values: 56, 87, 99, 40
2. Add another element at the end of the array with value: 68
3. Remove the 1st element of the array
4. Change 40 to 60.
5. Create a variable called average and compute for the average of the grades array.
    Tip: you can create another variable as a placeholder for the sum first.
*/

// 1.
const array = [56, 87, 99, 40];

// 2.
array.push(68);

// 3.
array.shift();

// 4.
array[2] = 60;

// 5.
let sum = 0;

for (element of array) {
    sum += element;
}

let average = sum / array.length;


/*Q2:
1. Create an object called vehicle with following properties:
    a. name (String)
    b. brand (String)
    c. year of make (Number)
    b. number of wheels (Number)
    e. isEnvironmentFriendly (Boolean)
Feel free to put any value.
2. Use the for-in loop to display both the properties and values of the object.
*/


// 1.
const whip = {
    name: "ol' reliable",
    brand: "Gucci",
    yearOfMake: 2013,
    numberOfWheels: 4,
    isEnvironmentFriendly: false
}


// 2.
for (key in whip) {
    console.log(`my whip ${key} is ${whip[key]}`);
}
