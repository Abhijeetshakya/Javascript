console.log("start")

setTimeout(()=>{
    console.log("this will show at last ")
},4000) ; 

console.log("end")

// callback example 

function greet(name,callback){
    console.log('hello'+name)
    callback() 
}
function sayhi(){
    console.log('hi')
}
greet('abhi',sayhi)

const numbers = [1, 2, 3, 4, 5];

// The function is a callback
numbers.forEach(function(number) {
  console.log(number * 2);
});
console.log("i am ignoring your task")

// another example 

function doSomething(message , callback){
    console.log(message) ; 
    callback(); 
}

let message = 'hi i am the message ' ; 

function done() {
    console.log('the message has been read')
}

doSomething(message); 