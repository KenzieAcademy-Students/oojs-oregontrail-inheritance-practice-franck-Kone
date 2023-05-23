/**
 * Oregon Trail-----------------------------------------------------------
 * Test Code is in tests.js
 */

// Create your Classes here.
// Copy your Traveler and Wagon code from the code.js file in your Oregon Trail Part 1 project into the code.js file in the new repo for Part 2.

// Important: Do not copy the testing code from tests.js! Part 2 has different testing code than Part 1 had!


// const Traveler = function (name) {
//     this.name = name;
//     this.food = 1;
//     this.isHealthy = true;
// }
// const Wagon = function (capacity) {
//     this.passengers = [];
//     this.capacity = capacity;
// }

// Traveler.prototype.hunt = function () {
//     this.food += 2;
// }

// Traveler.prototype.eat = function () {
//     if (this.food < 1) {
//         this.isHealthy = false
//         this.food = 0
//     } else {
//         this.food--;
//         this.isHealthy = true
//     }
// }

// Wagon.prototype.getAvailableSeatCount = function () {

//     return this.capacity - this.passengers.length
// }

// Wagon.prototype.join = function (travelerInstance) {

//     if (this.getAvailableSeatCount()) {
//         this.passengers.push(travelerInstance)
//     } else {
//         return 0
//     }
// }
// Wagon.prototype.shouldQuarantine = function () {

//     for (let passenger of this.passengers) {
//         if (passenger.isHealthy === false) {
//             return true
//         }
//     }
//     return false
// }
// Wagon.prototype.totalFood = function () {
//     let totalFood = 0

//     for (let passenger of this.passengers) {
//         totalFood += passenger.food
//     }
//     return totalFood
// }
class Traveler{
    constructor(name){
        this.name = name;
        this.food = 1;
        this.isHealthy = true
    }
    hunt(){
        this.food += 2;
    }
    eat() {
        if (this.food < 1) {
            this.isHealthy = false
            this.food = 0
        } else {
            this.food--;
            this.isHealthy = true
        }
    }

 
}
class Wagon{
    constructor(capacity){
        this.capacity = capacity;
        this.passengers = []
    }
    getAvailableSeatCount() {

        return this.capacity - this.passengers.length
    }
    join(travelerInstance) {

        if (this.getAvailableSeatCount()) {
            this.passengers.push(travelerInstance)
        } else {
            return 0
        }
    }
    shouldQuarantine() {

        for (let passenger of this.passengers) {
            if (passenger.isHealthy === false) {
                return true
            }
        }
        return false
    }
    totalFood = function () {
        let totalFood = 0

        for (let passenger of this.passengers) {
            totalFood += passenger.food
        }
        return totalFood
    }
}
// console.log(Wagon)
class Doctor extends Traveler{
    constructor(name){
        super(name)
    }
    heal(sickTravelerInstance){
      sickTravelerInstance.isHealthy = true
    }
}
class Hunter extends Traveler{
    constructor(name){
        super(name)
        this.food = 2
    }
    hunt(){
        this.food += 5;

    }
    eat(){
        if (this.food === 1) {
            this.isHealthy = false
            this.food -=1 
        } else if(this.food > 1) {
            this.food -= 2;
            this.isHealthy = true
        }else{
            this.isHealthy = false
            this.food = 0
        }

    }
    giveFood(travelerInstance, numOfFoodUnits){
      if(this.food){
        
        travelerInstance.food += numOfFoodUnits
        this.food -= numOfFoodUnits
      }
    }
}


