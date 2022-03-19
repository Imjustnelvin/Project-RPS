const body = document.querySelector('body');
const headerTitle = document.querySelector('.title');
//Result
const roundHeader = document.getElementById('round');
const announceWinner = document.getElementById('winner');
//PICKING
const computerPickId = document.getElementById('computer-pick');
const playerPickId = document.getElementById('player-pick');
//Selection
const allWeaponDiv = document.querySelectorAll('button');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');

//######### LOGIC ##########
//Computer Picked Weapon
let cpuPick= null;
function computerThing() {
		let randomNum = Math.floor(Math.random() * 3) + 1;
		let computer = null;
		console.log(randomNum) //random log
		if(randomNum === 1)
			computer = 'rock';
		else if(randomNum === 2)
			computer = 'paper';
		else
			computer = 'scissor';
		console.log(computer);

		if(computer === 'rock')
		{
			computerPickId.src="./images/icons8-rock-96.png";
		}
		else if(computer === 'paper')
		{
			computerPickId.src="./images/icons8-hand-64.png";
		}
		else if(computer === 'scissor')
		{	
			computerPickId.src="./images/icons8-scissor-64.png";
		}

		cpuPick = computer;
	}

//Player Picked Weapon
allWeaponDiv.forEach((button) => {
	button.addEventListener('click', () => {
		let round = 1;
		if(button.id == 'rock')
		{
			playerPickId.src ='./images/icons8-rock-96.png';
			computerThing();
		}
		else if(button.id == 'paper')
		{
			playerPickId.src ='./images/icons8-hand-64.png';
			computerThing();
		}
		else if(button.id == 'scissor')
		{
			playerPickId.src ='./images/icons8-scissor-64.png';
			computerThing();
		}

		//Who win?
			if(cpuPick == button.id)
			{
				announceWinner.textContent = 'TIED';
			}
			else  if(button.id === "rock" && cpuPick === "paper") 
			{
				announceWinner.textContent = 'COMPUTER WIN';
			}
			else  if(cpuPick === "rock" && button.id === "paper") 
			{
				announceWinner.textContent = 'PLAYER WIN';
			}
			else  if(button.id === "paper" && cpuPick === "scissor")
			{
				announceWinner.textContent = 'COMPUTER WIN';
			}
			else  if(cpuPick === "paper" && button.id === "scissor")
			{
				announceWinner.textContent = 'PLAYER WIN';
			}
			else  if(button.id === "scissor" && cpuPick === "rock")
			{
				announceWinner.textContent = 'COMPUTER WIN';
			}
			else  if(cpuPick === "scissor" && button.id === "rock") 
			{
				announceWinner.textContent = 'PLAYER WIN';
			}
	})
})

