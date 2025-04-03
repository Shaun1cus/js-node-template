const covenant = [
	"Plasma Pistol",
	"Needler",
	"Carbine",
	"Energy Sword",
	"Brute Shot",
];

console.log(covenant);

const masterChief = [{ name: "John", age: 41, health: 90, shield: 140 }];

console.log(masterChief);

const spartan = masterChief;
const halo4 = [
	{ name: "Gabriel", age: 19, health: 90, shield: 140 },
	{ name: "Sarah", age: 26, health: 90, shield: 140 },
	{ name: "Emile", age: 30, health: 90, shield: 140 },
];
spartan.push(halo4);

console.log(spartan);

const spartanWeapon = null;
let coventantWeapon;

const battleRifle = {
	fireMode: "Burst",
	magazineCapacity: 36,
	maxAmmo: 144,
	range: 950,
};

console.log(battleRifle.maxAmmo);
console.log(battleRifle.range);

const student = {
	fullName: "Shaun Putnam",
	course: "Web Development I",
	grade: 100,
	displayInfo() {
		return `${fullName} is taking ${course} and expects to earn ${grade}%.`;
	},
};

const student1 = {
	name: "Sarah",
	course: "JavaScript",
	grade: 95,
};

const student2 = {
	name: "John",
	course: "Python",
	grade: 88,
};

const student3 = {
	name: "Alice",
	course: "C++",
	grade: 92,
};

function displayStudentInfo(student) {
	return `${student.name} is taking ${student.course} and expects to earn ${student.grade}%.`;
}

console.log(displayStudentInfo(student1));
console.log(displayStudentInfo(student2));
console.log(displayStudentInfo(student3));

function add2Nums(x, y) {
	return x + y;
}

const sum = add2Nums(200, 300);

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);

console.log(numbers, "numbers");
console.log(doubledNumbers, "doubledNumbers"); // Output: [1, 2, 3, 4, 5]

const doomMonster = [
	// Deals 10-60 damage per bite
	{ name: "Cacodemon", health: 400, damage: 35 },

	// Deals 15-75 damage per claw/fireball
	{ name: "Baron of Hell", health: 1000, damage: 45 },

	// Deals 20-200 damage per rocket
	{ name: "Cyberdemon", health: 4000, damage: 125 },

	// Deals 5-50 damage per bite
	{ name: "Hell Knight", health: 800, damage: 25 },

	// Deals 10-100 damage per bite
	{ name: "Imp", health: 200, damage: 20 },

	// Deals 5-25 damage per bite
	{ name: "Lost Soul", health: 100, damage: 10 },

	// Deals 5-50 damage per bite
	{ name: "Pinky", health: 300, damage: 15 },

	// Deals 10-100 damage per bite
	{ name: "Revenant", health: 500, damage: 30 },

	// Deals 5-50 damage per bite
	{ name: "Spectre", health: 200, damage: 20 },

	// Deals 5-50 damage per bite
	{ name: "Spider Mastermind", health: 2000, damage: 50 },

	// Deals 5-50 damage per bite
	{ name: "Vile", health: 1000, damage: 40 },

	// Deals 5-50 damage per bite
	{ name: "Zombie", health: 100, damage: 5 },

	// Deals 5-50 damage per bite
	{ name: "Zombieman", health: 200, damage: 10 },
];

/* const monstersWithHealthBonus = doomMonster.map((monster) => {
	monster.health += 100;
	return monster;
});

console.log(doomMonster, "doomMonster");
console.log(monstersWithHealthBonus, "monstersWithHealthBonus");
*/

/* Why does the map function sometimes alter the original array?
   The map function creates a new array with the results of calling a provided function on every element in the calling array. 
   However, if the elements in the original array are objects, modifying the properties of those objects will also modify the original array, 
   because both the original and new arrays reference the same object in memory.
*/

/* Example:
const originalArray = [{ name: "John" }, { name: "Jane" }];
const newArray = originalArray.map((item) => {
	item.age = 30; // Modifying the object
	return item;
});
console.log(originalArray); // [{ name: "John", age: 30 }, { name: "Jane", age: 30 }]
console.log(newArray); // [{ name: "John", age: 30 }, { name: "Jane", age: 30 }]
*/
/* In this example, both originalArray and newArray reference the same objects.
   Therefore, modifying the properties of the objects in newArray also modifies the properties in originalArray.
*/

/* How do I avoid this?
   To avoid modifying the original array, you can create a new object for each element in the map function. 
   This can be done using the spread operator or Object.assign to create a shallow copy of the object.
*/
const monstersWithHealthBonus2 = doomMonster.map((monster) => {
	const newMonster = { ...monster }; // Create a shallow copy of the monster object
	newMonster.health += 100; // Modify the health property
	return newMonster; // Return the new objects
});
console.log(doomMonster, "doomMonster");
console.log(monstersWithHealthBonus2, "monstersWithHealthBonus2");

const monsters = [
	{
		name: "Cacodemon",
		health: 400,
		attacks: [{ type: "Plasma Ball", damage: { min: 10, max: 60 } }],
	},
	{
		name: "Baron of Hell",
		health: 1000,
		attacks: [
			{ type: "Claw", damage: { min: 15, max: 75 } },
			{ type: "Fireball", damage: { min: 15, max: 75 } },
		],
	},
	{
		name: "Cyberdemon",
		health: 4000,
		attacks: [{ type: "Rocket", damage: { min: 20, max: 200 } }],
	},
	{
		name: "Hell Knight",
		health: 800,
		attacks: [{ type: "Claw", damage: { min: 15, max: 75 } }],
	},
	{
		name: "Imp",
		health: 200,
		attacks: [{ type: "Demon Fire", damage: { min: 10, max: 100 } }],
	},
	{
		name: "Lost Soul",
		health: 100,
		attacks: [{ type: "Charge", damage: { min: 5, max: 25 } }],
	},
	{
		name: "Pinky",
		health: 300,
		attacks: [{ type: "Rend", damage: { min: 5, max: 50 } }],
	},
	{
		name: "Revenant",
		health: 500,
		attacks: [{ type: "Rocket Barrage", damage: { min: 10, max: 100 } }],
	},
	{
		name: "Spectre",
		health: 200,
		attacks: [{ type: "Enraged Lunge", damage: { min: 5, max: 50 } }],
	},
	{
		name: "Spider Mastermind",
		health: 2000,
		attacks: [{ type: "Chaingun", damage: { min: 10, max: 100 } }],
	},
	{
		name: "Arch Vile",
		health: 1000,
		attacks: [{ type: "Inferno", damage: { min: 25, max: 100 } }],
	},
	{
		name: "Zombieman",
		health: 200,
		attacks: [{ type: "Shotgun", damage: { min: 5, max: 50 } }],
	},
];

const monstersWithDamageBonus = monsters.map((monster) => {
	const localMonster = { ...monster };

	localMonster.attacks.map((attack) => {
		attack.damage.max = attack.damage.max + 10;

		return attack;
	});

	return monster;
});

console.log(JSON.stringify(monsters, null, 2), "monsters");
console.log(
	JSON.stringify(monstersWithDamageBonus, null, 2),
	"monstersWithDamageBonus",
);
