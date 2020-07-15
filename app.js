var name = "Cristina";
console.log(name);

var city = "SF";
console.log(city);

var favNum = 9;
console.log(favNum);

var food = ['pho', 'pizza', 'sushi', 'chicken'];
console.log(food);

//console.log stores info that we can access later
//while loops
var number = 10;
var otherNumber = 1;
while (otherNumber < number) {
    console.log(otherNumber);
    otherNumber += 1; //other number = other number + 1 - considered a counter
}

var numberTwo = 20;
var myOtherNumber = 10;
while (myOtherNumber < numberTwo) {
    console.log(myOtherNumber); //prints 10, 11
    myOtherNumber += 1; //prints 11, 12 ---- adding 1 each time the loop runs
}

var numberThree = 30;
var numberFour = 20;
while (numberFour < numberThree) {
    console.log(numberFour);
    numberFour += 1;
}

//FOR LOOPS
for (var i = 0; i < 10; i++) {
    console.log(i); //starts at 0, increases by 1 until you reach 9
}

for (var i = 0; i < food.length; i++) {
    //console.log(food[i]) //console log i starting from index 0
    var eachFood = food[i]; //runs through each element of the Food array// use this method instead of the method above **
    console.log(eachFood);
}

//make an array
//use for loop to iterate through your array
//print each element in your array

var colors = ['green', 'blue', 'burgundy'];
console.log(colors);

for (var i = 0; i < colors.length; i++) {
    var eachColor = colors[i];
    console.log(eachColor);
}

const cars = ['Tesla', 'Honda', 'Toyota', 'Ford'];
console.log(cars);

for (let i =0; i < cars.length; i++) {
    let eachCar = cars[i];
    console.log(eachCar);
}

//OBJECTS
//key: value pairs - separated my commas

const cristina = {
    fullName: "Cristina Nguyen",
    age: 26,
    myLocation: "SJ",
    placesTraveled: ["New Orleans", "Ohio", "Hawaii"]
}

console.log(cristina);

//return myLocation value 
console.log(cristina.myLocation);

//print Ohio
console.log(cristina.placesTraveled[1]);

// what would an instagram page include
const myCoolPost = {
    username: "@crisssytina",
    likes: 100,
    comments: ["nice post", "awesome", "woah"],
    caption: "Day 3 of SEI",
    picture: "img link",
    shares: 12
}
//likes, captions, shares, comments, username, pictures
console.log(myCoolPost);

//how to add more info to an object - the object above 
myCoolPost.myLoc = "San Jose";
console.log(myCoolPost);

//FUNCTIONS
//helps to make code dry
//console.log("Hello");
function sayHello() { //standard way to write functions
    //write your code
    //or write logic
    console.log("Hello");
}

sayHello();
sayHello();

//FUNCTION EXPRESSION
const sayHelloAgain = function() {
    console.log("Hello Again");
}
sayHelloAgain();

//ARROW FUNCTION
const sayHelloFinal = () => {
    console.log("Hello for the last time");
}
sayHelloFinal();

//PARAMETERS - adding information inside of a function
//add a function with a for loop, and if else statement
const otherNums = [11, 22, 33, 44, 55];
function printNumbers(numbers) { //numbers is placeholder. you can call it whatever you want.
    //console.log(numbers);
    for (let i = 0; i < numbers.length; i++){
        let num = numbers[i];
        
        if (num < 40) {
            console.log("This number is less than 40: " +num);
        } else {
            console.log("This number is greater than 40: " +num);
        }
    }
}
//printNumbers(numbers);
printNumbers(otherNums);

// Returning a function
const numbers = [1, 2, 3, 4, 5, 6];

function addNumbers(array) {
    let result = 0;

    for (let i = 0; i < array.length; i++) { //iterating through each element in array
        let num = array[i]; // 1, 2, 3, 4, 5

        result += num; //1, 3, 6, 10, 15
    }
    return result;
}

console.log(addNumbers(numbers));