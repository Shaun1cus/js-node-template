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
