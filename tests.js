/**
 * TESTS -----------------------------------------------------------
 * Do not modify these, but use them to verify that your code works.
 */

function kenzieAssert(paramObject) {
	let actual = paramObject.actual;
	let expected = paramObject.expected;
	if (actual === expected) {
		console.log(`PASS Test #${paramObject.testNumber} ${paramObject.testFunction}`);
	} else {
		console.error(`FAIL Test #${paramObject.testNumber} ${paramObject.testFunction}`, {
			test: paramObject.failureMessage,
			expected: expected,
			actual: actual,
		});
	}
}

// Create a wagon that can hold 4 people
let wagon = new Wagon(4);
// Create five travelers
let henrietta = new Traveler("Henrietta");
let juan = new Traveler("Juan");
let drsmith = new Doctor("Dr. Smith");
let sarahunter = new Hunter("Sara");
kenzieAssert({
	actual: sarahunter.food,
	expected: 2,
	testNumber: 1,
	testFunction: "Hunter constructor",
	failureMessage:
		"Hunter constructor should create a property called food and initialize it to 2",
});

let maude = new Traveler("Maude");

kenzieAssert({
	actual: wagon.getAvailableSeatCount(),
	expected: 4,
	testNumber: 2,
	testFunction: "getAvailableSeatCount",
	failureMessage:
		"There should be four available seats left in the empty wagon",
});

wagon.join(henrietta);
kenzieAssert({
	actual: wagon.getAvailableSeatCount(),
	expected: 3,
	testNumber: 3,
	testFunction: "getAvailableSeatCount",
	failureMessage:
		"There should be three available seats left after henrietta joins",
});

wagon.join(juan);
wagon.join(drsmith);
wagon.join(sarahunter);
wagon.join(maude); // There isn't room for her!

kenzieAssert({
	actual: wagon.getAvailableSeatCount(),
	expected: 0,
	testNumber: 4,
	testFunction: "getAvailableSeatCount",
	failureMessage: "There should be no available seats left",
});

sarahunter.hunt(); // Gets 5 more food
kenzieAssert({
	actual: sarahunter.food,
	expected: 7,
	testNumber: 5,
	testFunction: "Hunter.hunt",
	failureMessage: "Hunter.hunt should increase the hunter's food by 5",
});
drsmith.hunt();

kenzieAssert({
	actual: wagon.totalFood(),
	expected: 12,
	testNumber: 6,
	testFunction: "totalFood",
	failureMessage: "There should be 12 total food",
});

henrietta.eat();
sarahunter.eat();
kenzieAssert({
	actual: sarahunter.food,
	expected: 5,
	testNumber: 7,
	testFunction: "Hunter.eat",
	failureMessage: "Hunter.eat should decrease the hunter's food by 2",
});
drsmith.eat();
juan.eat(); // After eating, Juan now has 0 food BUT is healthy
kenzieAssert({
	actual: juan.food,
	expected: 0,
	testNumber: 8,
	testFunction: "Traveler.eat",
	failureMessage: "Traveler.eat should decrease the traveler's food by 1",
});
kenzieAssert({
	actual: juan.isHealthy,
	expected: true,
	testNumber: 9,
	testFunction: "Traveler.eat",
	failureMessage: "Only set isHealthy to false if the traveler has 0 food when the .eat() function is called. If the .eat() function takes the traveler down to 0 food, they are still healthy.",
});
kenzieAssert({
	actual: wagon.shouldQuarantine(),
	expected: false,
	testNumber: 10,
	testFunction: "shouldQuarantine",
	failureMessage: "The wagon should NOT quarantine because no one is sick",
});

juan.eat(); // Juan tries to eat but has 0 food, so he's now hungry (sick)
kenzieAssert({
	actual: juan.food < 0,
	expected: false,
	testNumber: 11,
	testFunction: "Traveler.eat",
	failureMessage: "Traveler.eat should never decrease the traveler's food lower than 0",
});
kenzieAssert({
	actual: juan.isHealthy,
	expected: false,
	testNumber: 12,
	testFunction: "Traveler.eat",
	failureMessage: "A traveler's .isHealthy should be set to false if the .eat() method is run when they have 0 food",
});
kenzieAssert({
	actual: wagon.shouldQuarantine(),
	expected: true,
	testNumber: 13,
	testFunction: "shouldQuarantine",
	failureMessage: "The wagon should quarantine because juan is sick",
});

kenzieAssert({
	actual: wagon.totalFood(),
	expected: 7,
	testNumber: 14,
	testFunction: "totalFood",
	failureMessage: "The wagon should have 7 food",
});

drsmith.heal(juan);
kenzieAssert({
	actual: juan.isHealthy,
	expected: true,
	testNumber: 15,
	testFunction: "Doctor.heal",
	failureMessage: "Doctor.heal should change the specifed traveler's .isHealthy property to true",
});

kenzieAssert({
	actual: wagon.shouldQuarantine(),
	expected: false,
	testNumber: 16,
	testFunction: "shouldQuarantine",
	failureMessage: "The wagon should not quarantine because juan was healed",
});

sarahunter.giveFood(juan, 4);
kenzieAssert({
	actual: juan.food,
	expected: 4,
	testNumber: 17,
	testFunction: "Hunter.giveFood",
	failureMessage: "Hunter.giveFood should increase the specified traveler's food by the specified amount",
});
kenzieAssert({
	actual: sarahunter.food,
	expected: 1,
	testNumber: 18,
	testFunction: "Hunter.giveFood",
	failureMessage: "Hunter.giveFood should decrease the hunter's food by the specified amount",
});
sarahunter.eat(); // She only has 1, so she eats it and is now sick
kenzieAssert({
	actual: sarahunter.food,
	expected: 0,
	testNumber: 19,
	testFunction: "Hunter.eat",
	failureMessage: "Hunter.eat should decrease the hunter's food to 0 if they only have 1 to eat",
});
kenzieAssert({
	actual: sarahunter.isHealthy,
	expected: false,
	testNumber: 20,
	testFunction: "Hunter.eat",
	failureMessage: "A hunter's .isHealthy should be set to false if the .eat() method is run when they have less than 2 food",
});

kenzieAssert({
	actual: wagon.shouldQuarantine(),
	expected: true,
	testNumber: 21,
	testFunction: "shouldQuarantine",
	failureMessage: "The wagon should quarantine because sarah is now sick",
});

kenzieAssert({
	actual: wagon.totalFood(),
	expected: 6,
	testNumber: 22,
	testFunction: "totalFood",
	failureMessage: "The wagon should have 6 food",
});
