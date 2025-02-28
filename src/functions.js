// HINT: To multiply in JS, use the '*' operator

// Test 1: Calculate order total
const order = {
	price: 10,
	quantity: 2,
};

function calculateTotal(order) {
	return order.price * order.quantity;
}

console.log(calculateTotal(order)); // Should print: 20

// Test 2: Format a username
function formatUsername(firstName, lastName) {
	return `${lastName}, ${firstName}`;
}
console.log(formatUsername("John", "Doe")); // Should print: "Doe, John"

// Test 3: Combine two strings with a space between
function combineStrings(str1, str2) {
	return `${str1} ${str2}`;
}
console.log(combineStrings("Hello", "World")); // Should print: "Hello World"

// Test 4: Calculate cart total with tax
function calculateCartTotal(cart) {
	return cart.price + cart.price * cart.tax;
}
const cart = {
	price: 100,
	tax: 0.07,
};
console.log(calculateCartTotal(cart)); // Should print: 107

// Test 5: Format a full name
function buildFullName(nameInfo) {
	return `${nameInfo.firstName} ${nameInfo.lastName}`;
}
const nameInfo = {
	firstName: "John",
	lastName: "Doe",
};
console.log(buildFullName(nameInfo)); // Should print: "John Doe"

// Test 6: Create a game character description
function createCharacterDescription(character) {
	return `Level ${character.level} ${character.name} wielding a ${character.weapon}`;
}
const character = {
	name: "Hero",
	weapon: "Sword",
	level: 1,
};
console.log(createCharacterDescription(character)); // Should print: "Level 1 Hero wielding a Sword"
