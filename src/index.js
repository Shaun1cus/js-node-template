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
