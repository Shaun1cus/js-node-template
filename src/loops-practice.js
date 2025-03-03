// Display an array of objects that represent players in a Doom Deathmatch game
const players = [
	{ name: "DoomGuy", kills: 25, deaths: 5 },
	{ name: "Slayer", kills: 18, deaths: 7 },
	{ name: "Marine", kills: 12, deaths: 12 },
];

// Calculate and display kill/death ratio for each player
for (let i = 0; i < players.length; i++) {
	const player = players[i];
	const killDeathRatio =
		/*
			Variable to represent the kill/death ratio for each player. Calculated by dividing the number of kills by the number of deaths,with a minimum value of 1 to avoid division by zero.
		*/
		(player.kills / Math.max(1, player.deaths)).toFixed(2);

	console.log(
		/*
			Output the scoreboard for each player, including their name, number of kills, number of deaths, and kill/death ratio.
		*/
		`${player.name}: ${player.kills} kills, ${player.deaths} deaths, K/D ratio: ${killDeathRatio}`,
	);
}

let playerHealth = 100; // Player's starting health
let roundCount = 0; // Number of rounds survived, initialized to 0

while (playerHealth > 0) {
	// Random damage between 5 and 25
	const damage = Math.floor(Math.random() * 21) + 5;
	playerHealth -= damage;

	roundCount++;
	console.log(
		/*
			Output the results of each round, including the round number and the amount of damage taken by the player, as well as the player's remaining health. The player's health has a minimum possible value of 0.
		*/
		`Round ${roundCount}: Player took ${damage} damage. Health remaining: ${Math.max(0, playerHealth)}`,
	);
}

console.log(`Game over! Player survived ${roundCount} rounds.`);

console.log(Math.floor(4.999));

/*
	Write a for loop that counts from 1 to 10 and outputs each number to the console. Then, write a while loop that does the same thing. Include comments explaining the differences between these two approaches.
*/

// For loop counting from 1 to 10
for (let i = 1; i <= 10; i++) {
	console.log(i);
}

// While loop counting from 1 to 10
let j = 1; // Initialize the loop counter
while (j <= 10) {
	console.log(j);
	j++; // Increment the loop counter
}

/*
	The for loop is typically used when the number of iterations is known in advance, as it allows for a more concise and readable syntax. The loop counter is initialized, the loop condition is checked, and the loop counter is incremented within the loop definition itself. In contrast, the while loop is more flexible and can be used when the number of iterations is not known in advance. The loop counter must be initialized before the loop, the loop condition is checked at the beginning of each iteration, and the loop counter must be manually incremented within the loop body. While loops are often used when the loop condition is more complex or when the loop may terminate based on external factors. Both loops can achieve the same result, but the choice between them depends on the specific requirements of the task at hand.
*/

/*
	Create an array of your favorite video games or movies (at least 5 items.) Use a for loop to iterate through the array and output each item to the console along with its position in the list (e.g., "Item 1: Doom").
*/

const favoriteGames = [
	"Fallout: New Vegas",
	"Elder Scrolls V: Skyrim",
	"The Last of Us",
	"Red Dead Redemption 2",
	"Cyberpunk 2077",
	"Mass Effect 2",
	"Resogun",
];

for (let i = 0; i < favoriteGames.length; i++) {
	console.log(`Item ${i + 1}: ${favoriteGames[i]}`);
}
