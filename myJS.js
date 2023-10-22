/*

t.push(5)
console.log(t.length)

t.forEach(value => { console.log(value)})


const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)  
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed

const t = [1, 4,5, 6,7]

const [first, second, ...rest]=t
console.log(first, second)
console.log(rest)

// JavaScript Objects

const Object1 ={
    name: "Freda Gyasi Oduwaa",
    age: 23,
    education: "PhD"
}
 const object2 = {
    name: 'Full stack web application',
    level: 'intermediate studies',
    size : 5
 }

 console.log(Object1.name)


 //functions


 const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',

  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
}

arto.greet()  // "hello, my name is Arto Hellas" gets printed


//classes
class Person{
    constructor(name, status){
        this.name = name
        this.status = status
    }
    greet(){
        console.log('hello my name is ' + this.name)
    }
}

const adam =new Person("Nadia Liny", "Active")
adam.greet()

const Zoe = new Person('Zoey', 'Offline')
Zoe.greet()


for(let )

*/


// Magic Eight Balls
let userName = ''
userName ? console.log(`Hello ${userName}`): console.log('Hello!')

let userQuestion = ''
console.log(`${userName} asked that , ${userQuestion}`)

let randomNumber = Math.floor(Math.random()* 8);

let eightBall = '';

switch (randomNumber){
  case 0 :
  eightBall = 'It is certain'
  break;

  case 1:
  eightBall = 'It is decidely so'
  break;

  case 2:
  eightBall = 'Reply hazy try agian'
  break;

  case 3:
  eightBall = 'Cannot predict now'
  break;

  case 4:
  eightBall = 'Do not count on it'
  break;

  case 5:
  eightBall = 'My sources say no'
  break;

  case 6:
  eightBall = 'Outlook not so good'
  break;

  case 7:
  eightBall = 'Signs point to yes'
  break;

}
console.log(eightBall)


//Race Day

//Generate random register number
let raceNumber = Math.floor(Math.random() * 1000)

const registeredEarly = true;//checks if a racer registerd early

const runnerAge = 17;

//control flow to check whether runner is adult and registered early
if (runnerAge  >= 18 && registeredEarly == true){
  raceNumber += 1000;
}

//Schedulling the race for each individual
if (runnerAge > 18 && registeredEarly == true){
  console.log(`${raceNumber} will race at 9:30 am`)
}

else if(runnerAge > 18 && registeredEarly == false){
  console.log(`${raceNumber} will start the race at 11:30 am`)
}

else if(runnerAge < 18){
  console.log(`${raceNumber} , you start the race at 12:30 pm`)
}
else{console.log(`${raceNumber} see the registration desk`)}

// Functions
 const monitorCount = (rows ,columns)=>{
  return rows * columns

 }
//helper functions
const costOfMonitors =(rows, columns) =>{
  return monitorCount(rows,columns) * 300
}
console.log(costOfMonitors(9,5))

//function as a variable
const plantNeedsWater = function (day) {
    if (day === 'Wednesday'){
      return true
    }
    else return false;
}
plantNeedsWater('Tuesday')
console.log(plantNeedsWater('Tuesday'))

//sales , negotiation , human nature and money---rading assignment

//array
const farmland = ['Avocado', 'Maize', 'Shea nut']
const wow =(arr) =>{
  arr.push('Palm')
}

wow(farmland)
console.log(farmland)

//Loops
//A loop is a programming tool that repeats a set of instructions until a 
//specified condition, called a stopping condition is reached.

for (let counter = 0; counter <= 4; counter ++){
  console.log(counter)
}

/*looping through arrays
const vacationSpots = ['Balis','Paris', 'Tulum', 'Tema']

for (let n = 0; n < vacationSpots.length; n++){
  console.log('I would love to visit ' + vacationSpots[n] )
}
*/
//nested loops
//When we have a loop running inside another loop, we call that a nested loop. One use for a nested for loop is to compare the elements in two arrays. For each round of the outer for loop, the inner for loop will run completely.


//Code to select mutual friends from two friends
// Write your code below
const bobsFollowers = ['Nadia', 'Zoey', 'Stephan','Henny']
const tinasFollowers = ['Henny','Nadia','Michael']
const mutualFollowers = []

for (let i = 0; i < bobsFollowers.length; i++){
  for (let j = 0; j < tinasFollowers.length; j++){
    if (bobsFollowers[i] === tinasFollowers[j]){
        mutualFollowers.push(bobsFollowers[i])
        console.log(mutualFollowers)
    }
  }
}

//while loop
const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
//code assigns random number to elements in array as their index
let currentCard;
while (currentCard !=='spade'){
  currentCard =cards[Math.floor(Math.random()*4)]
  console.log(currentCard)
}

//Do...while loop
//A do...while statement says to do a task once and then keep doing it until a specified condition is no longer met.
// Write your code below
let cupsOfSugarNeeded = 5;
let cupsAdded = 0;
do{
  cupsAdded++;
  console.log(cupsAdded + ' cup was added')
}while(cupsAdded < cupsOfSugarNeeded);

const n = 5
let i = 0
do {
  i++
  console.log(i)
}while(i <n )

//the break keyword
for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
     break;
  }
  console.log('Banana.');
}

console.log('Orange you glad I broke out the loop!');

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0 ; i < rapperArray.length; i ++){
  console.log(rapperArray[i])
  if (i === 2){
    break;
  }
}
console.log("And if you don't know, now you know.")

/// Higher-order functions
//Higher-order functions are functions that accept other functions as arguments and/or return functions as output

//functions as data
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

// Write your code below
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
isTwoPlusTwo();
console.log(isTwoPlusTwo.name)
//function as a parameter


const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
let checkA = val + 2
let checkB = func(val)
return (checkA === checkB)? func(val):'inconsistent results'
}

console.log(checkConsistentOutput(addTwo, 30));

//iterators
//.forEach method

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(value => console.log(`I want to eat a ${value}`))

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];


// Create the secretMessage array below
//When .map() is called on an array, it takes an argument of a callback function and returns a new array!
const secretMessage = animals.map(word => word[0] )


console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(small => small / 100)


//Another useful iterator method is .filter(). Like .map(), .filter() returns a new array. However, .filter() returns an array of elements after filtering out certain elements from the original array. The callback function for the .filter() method should return true or false depending on the element that is passed to it. The elements that cause the callback function to return true are added to the new array

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
 const someNumbers = randomNumbers.filter(value => value < 250 )

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => word.length > 7)

//findIndex() METHOD
const Animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = Animals.findIndex(animal => animal === 'elephant')

const startsWithS = Animals.findIndex(animal => {
  return animal[0] === 's';
});

//The .reduce() Method
//Another widely used iteration method is .reduce(). The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array.

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);

//more iterators
const words = ["unique", "uncanny", "pique", "oxymoron", "guise"];

// Something is missing in the method call below

console.log(
  words.some((word) => {
    return word.length < 6;
  })
);

// Use filter to create a new array
const interestingWords = words.filter((value) => value.length > 5);

// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(
  interestingWords.every((word) => {
    return word.length > 5;
  })
);


////Objects
//Methods
//When the data stored on an object is a function we call that a method. A property is what an object has, while a method is what an object does.

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
const alienShip = {
  retreat () {
    console.log(retreatMessage)
  },
   takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
}
alienShip.retreat()
alienShip.takeOff()

//nested object
let spaceship = {
  passengers: [{name: 'Space Dog'}], 
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

let capFave = spaceship.crew.captain['favorite foods'][0];

let firstPassenger = spaceship.passengers[0];

///object pass by reference
let spaceShip = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
let greenEnergy = obj => {
obj['Fuel Type'] = 'avocado oil'
}

let remotelyDisable = obj => {
  obj['disabled'] = true
}
greenEnergy(spaceShip);
remotelyDisable(spaceShip)
console.log(spaceship)

// Write your code below
for (let crewMembers in spaceship.crew){
  console.log(`${crewMembers}: ${spaceship.crew[crewMembers].name}`)
};

for (let crewMembers in spaceship.crew){
  console.log(`${spaceship.crew[crewMembers].name}: ${spaceship.crew[crewMembers].degree}`)
}
//Advanced Objects
const robot = {
  model:'1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};
console.log(robot.provideInfo())

const cop = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){
    if(typeof this._energyLevel === 'number') {
      return 'My current energy level is ' + this._energyLevel
    }
    else {
      return 'System malfunction: cannot retrieve energy level'
    }
  }
};
console.log(cop.energyLevel)

//Factory Functions
//A factory function is a function that returns an object and can be reused to make multiple object instances

const robotFactory = (model, mobile ) =>{
  return{
    model:model,
    mobile: mobile,
    beep() {
     console.log("Beep Boop")
   }
  }  
}
const tinCan = robotFactory('P-500', true)
tinCan.beep()

