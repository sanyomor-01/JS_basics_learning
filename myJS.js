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
/*let userName = ''
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
*/
//Loops
//A loop is a programming tool that repeats a set of instructions until a 
//specified condition, called a stopping condition is reached.

for (let counter = 0; counter <= 4; counter ++){
  console.log(counter)
}

//looping through arrays
const vacationSpots = ['Balis','Paris', 'Tulum', 'Tema']

for (let n = 0; n < vacationSpots.length; n++){
  console.log('I would love to visit ' + vacationSpots[n] )
}

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