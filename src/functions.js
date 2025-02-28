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
