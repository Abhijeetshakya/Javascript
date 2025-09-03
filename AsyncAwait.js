/*

// A regular function that returns a Promise
function fetchData() {
  // We'll simulate a network request that takes 2 seconds
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("🎉 Data has arrived!");
    }, 2000);
  });
}

// Our async function that uses await
async function displayData() {
  console.log("Starting to fetch data...");
  
  // The 'await' keyword pauses the function right here
  const data = await fetchData(); // It waits for the promise from fetchData() to resolve
  
  // ...and 2 seconds later, this line runs.
  console.log(data); // Logs: 🎉 Data has arrived!
}

displayData();
console.log("This message logs immediately!"); // This proves the async function doesn't block the main thread.




// task 

// Your goal is to fetch a single "to-do" item from a free public API called JSONPlaceholder.

async function getTodo(){
    try{
        const fetchData = await fetch('https://jsonplaceholder.typicode.com/todos/1'); 
        const data = await fetchData.json() ; 
        console.log(data) ; 
    }catch(error){
        console.error("An error occured:", error) ; 
    }
}
getTodo(); 

// Waits for 2 seconds
async function slow() {
  console.log('Slow function starts');
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log('Slow function ends');
}

// Waits for 1 second
async function fast() {
  console.log('Fast function starts');
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Fast function ends');
}

console.log('Start');
slow();
fast();
console.log('End');
*/

// This function simulates fetching a user from a database
async function getUser() {
  console.log('Getting user...');
  // Wait for 1.5 seconds
  await new Promise(resolve => setTimeout(resolve, 1500)); 
  return { name: 'Alex' };
}

async function main() {
  console.log('Main function started');
  const user = await getUser();
  console.log(`Got user: ${user.name}`);
  console.log('Main function finished');
}

main();