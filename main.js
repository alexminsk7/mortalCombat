const player1 = {
	name: 'SCORPION',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	weapon: ['sword', 'minigun', 'pillow'],
	attack() {
		console.log(this.name + ' Fight...');
	},
};

const player2 = {
	name: 'SUB-ZERO',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
	weapon: ['dagger', 'pistol', 'flowers'],
	attack() {
		console.log(this.name + ' Fight...');
	},
};

function createPlayer(player, name, health) {
	const $arenas = document.querySelector('.arenas');

	const $player = document.createElement('div');
	const $progressbar = document.createElement('div');
	const $life = document.createElement('div');
	const $name = document.createElement('div');
	const $character = document.createElement('div');
	const $img = document.createElement('img');

	$player.classList.add(`${player}`);
	$progressbar.classList.add('progressbar');
	$life.classList.add('life');
	$life.style.width = health + '%';
	$name.classList.add('name');
	$character.classList.add('character');

	$player.appendChild($progressbar);
	$player.appendChild($character);
	$progressbar.appendChild($life);
	$progressbar.appendChild($name);
	$character.appendChild($img);
	$arenas.appendChild($player);

	$img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';
	$name.innerText = name;
}

createPlayer('player1', 'SCORPION', 100);
createPlayer('player2', 'SUB-ZERO', 100);
