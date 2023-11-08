 //document.getElementById('count-el').innerText = 5
//count +=1
//console.log(count)
//let count = 5

let count =0
let  countEl = document.getElementById('count-el')

const Increment = () => {
    count += 100;
    countEl.textContent = count 
}
const decrement = () =>{
    count -= 50
    countEl.textContent = count
}
const save = () =>{
  
 let saveEl = document.getElementById('save-el')
let countEntru = count + ' - '
saveEl.textContent += countEntru
count = 0
countEl.textContent = 0
}



