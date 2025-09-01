/*

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


*/


// another example 

function doSomething(message , callback){
    console.log(message) ; 
    callback() ; 
}

let message = 'hi i am the message ' ; 

function done() {
    console.log('the message has been read')
}

doSomething(message,done); 


/*


// promises 

const myFirstPromise = new Promise((resolve, reject) => {
  // Let's simulate an asynchronous operation with setTimeout
  setTimeout(() => {
    const isSuccess = true; // Pretend we are checking if a task succeeded
    if (isSuccess) {
      resolve('Success! The task is complete.'); // This is how you fulfill the promise
    } else {
      reject('Failure! Something went wrong.'); // This is how you reject the promise
    }
  }, 2000); // 2-second delay
});

// Now we consume the promise
myFirstPromise.then(message => {
  console.log(message); // This runs if the promise is fulfilled
}).catch(error => {
  console.error(error); // This runs if the promise is rejected
});

*/


// promises example github api 

/*
fetch('https://api.github.com/users/Abhijeetshakya')
.then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json() ; 
})
.then(data=> {
    console.log(data.followers)
    console.log(data.login) ; 
})
.catch(error => {
    // .catch() is called if any promise in the chain is rejected.
    console.error('There has been a problem with your fetch operation:', error);
  });

*/
// another free api example 
// bored api 

fetch('https://bored-api.appbrewery.com/random')
.then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json() ; 
})
.then(data => {
    console.log(data.activity) 
    console.log(data.type)
    console.log(data.price)
})
.catch(error => {
    // .catch() is called if any promise in the chain is rejected.
    console.error('There has been a problem with your fetch operation:', error);
  });

  // task to 
  //  Learning coach

/*

Practice Problem:

Imagine you're building a simple app that fetches a list of user IDs. Your task is to write a function called fetchUserIds that returns a Promise. This Promise should:

    Simulate a network request with a setTimeout that takes 1 second.

    After 1 second, it should resolve the Promise with an array of user IDs: [101, 102, 103].

    Then, write a .then() block to log a success message and the array of user IDs to the console.
*/
function fetchUserIds(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            const userid = [101,102,103] ; 
            resolve(userid)
        } , 1000)
    })
}
fetchUserIds().then(
    userid => {
        console.log(userid) ; 
    }
)