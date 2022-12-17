//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

const food_favorites = (individual) => {
    return `This individual likes '${individual['pizza'][0]}' pizza and ${individual['tacos']} for taco choices, ${individual['burgers']}, ice-cream of the following flavors- ${individual['ice_cream'][0]}, ${individual['ice_cream'][1]}, and ${individual['ice_cream'][2]}. Last but not least, this individual likes the following from certain chains- Oberwise: ${individual['shakes'][0]['oberwise']}, Dunkin: ${individual['shakes'][0]['dunkin']}, Culvers: ${individual['shakes'][0]['culvers']}, mcDonalds: ${individual['shakes'][0]['mcDonalds']}, Cupids Candies: ${individual['shakes'][0]['cupids_candies']}`
}
console.log(food_favorites(person3))


//=======Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Class
class individual {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    printInfo = () => {
        return `${this.name} is ${this.age} years old`
    }

    happybirthday = () => {
        return this.age+=1
    }

}

const person1 = new individual('Avril', 24)
console.log(person1.printInfo())

const person2 = new individual('Tapiwa', 25)
console.log(person2.printInfo(), person2.happybirthday()+2)

// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const numLength = (your_string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if ( your_string.length > 10) {
                resolve("Big word")
            } else if ( your_string.length < 10) {
                reject("Small Number")
            }
        }, 3000 )
    })
}

setTimeout(() => {console.log(numLength('myhelloisginhfdd'))}, 5000)


//--------------------------------------------------------------------------------------------------------------------------------------------------
// codewars solution 1:

// This code does not execute properly. Try to figure out why.

// function multiply(a, b){
//     return a * b
//   }

// -------------------------------------------------------------------------------------------------------------------------------------------------


// codewars solution 2:

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
// const quarterOf = (month) => {
//     return Math.ceil(month/3)
    
//   }
  
