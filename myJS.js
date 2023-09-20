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

  default:
  eightBall = ''
}
console.log(eightBall)


//Race Day

//Generate random register number
let raceNumber = Math.floor(Math.random() * 1000)

const registeredEarly = true;//checks if a racer registerd early

const runnerAge = 18;

//control flow to check whether runner is adult and registered early
if (runnerAge  >= 18 && registeredEarly == true){
  raceNumber += 1000;
}

