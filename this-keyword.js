const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    // Here, 'this' refers to the 'person' object
    return person.firstName + " " + person.lastName;
  }
};

// When we call the method on the person object...
console.log(person.fullName());

// this practice 

const car = {
    brand : "toyota",
    modle : "corolla",
    displayInfo : function(){
        return " this is  a " + this.brand + this.modle ; 
    }
}; 

console.log(car.displayInfo()) ; 


// task 2 


// using this keyword in event handler 

/*

<button id="colorChanger">Change my color</button>

const button =  document.getElementById("colorChanger")
function changer(){
    console.log(this.textContent) ; 
    this.style.backgroundColor= "lightblue" ; 
    console.log(this.textContent = "color changed") ; 
}

button.addEventListener("click" ,changer) ; 
*/

// task 2 

const events = {
  eventName: "Annual Tech Conference",
  start: function() {
    console.log(this.eventName + " is starting soon...");

    // This function is supposed to announce the start after 2 seconds
    setTimeout( () =>  {
      console.log(this.eventName + " has officially started!");
    }, 2000);
  }
};

events.start();