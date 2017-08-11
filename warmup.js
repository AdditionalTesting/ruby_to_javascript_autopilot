var apples = 14;
console.log(apples);
console.log("I have " + apples + ' apples.');

var materials = ['wood', 'metal', 'stone'];
var words = {
    'elephant': "The largest animal",
    'school': "Place of learning",
    'ice cream': "Delicious"
}

var num = 16;

if (num > 10) {
    console.log(num + 'is greater than 10')
} else if (num === 10) {
    console.log(num + 'is exactly 10')
} else {
    console.log(num + 'is less than 10')
}

for (i = 0; i < 10; i++) { 
    console.log('string');
}

var base = 5;
for (i = 0; i < 20; i++) {
    console.log(i + base);
}

var total = 0;
for (i = 0; i < 100; i++) {
    total += i;
}
console.log(total);

for (i = 3; i <= 15; i++) {
    if (i > 9) {
        console.log("You can get on rollercoaster");
    } else {
        console.log("you are too short");
    }
}

var containers = ['purse', 'wallet', 'backpack']

for (i = 0; i <= 2; i++) {
    console.log(containers[i]);
}

function helloWorld(greeting) {
    console.log(greeting);
}

helloWorld("Hello World");



function addIt(firstNum, secondNum) {
    return firstNum + secondNum;
}

var amount = addIt(5, 7);

console.log(amount);