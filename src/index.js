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
