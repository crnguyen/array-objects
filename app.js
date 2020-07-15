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

//for loops
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