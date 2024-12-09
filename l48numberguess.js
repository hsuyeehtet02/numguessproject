//UI

const minnum = document.querySelector(".minnumber"),
	  maxnum = document.querySelector('.maxnumber'),
	  getinput = document.querySelector('#guessnumber'),
	  getbtn = document.querySelector('#btn'),
	  message1 = document.querySelector('.message1'),
	  message2 = document.querySelector(".message2"),
	  getgameform = document.getElementById('gameform');


const min = 1,
	  max =20,
	  winningnum = randomnum(min,max);

let gameleft = 5;

minnum.textContent= min;
maxnum.innerText = max;


getbtn.addEventListener("click",function(e){
	// console.log("I am working");
	// console.log(getinput.value);
	// console.log(typeof getinput.value)

	// let guess = Number(getinput.value);
	// let guess = +getinput.value;
	let guess = parseInt(getinput.value);

	// console.log(guess)
	// console.log(typeof guess)

	if(guess < min || guess > max || isNaN(guess)){
	// console.log(`Please enter a number between ${min} to ${max}`)
	setmessage2(`Please enter a number between ${min} to ${max}`,"red");
	}


	if (guess === winningnum){
	 			//Gameover WON
	 			// console.log("You Win");

	 			// Disable box
	 			// getinput.disabled = true;

	 			// getinput Border color to change green
	 			// getinput.style.borderColor = "green";

	 			// message 1 
	 			// message1.textContent = `${winningnum} is correct !! You Win`;
	 			// message1.style.color ="green"
	 			
	 			// setmessage1(`${winningnum} is correct! You Won`,"green")

	 			// play again?
	 			// getbtn.value="Play Again";

		e.preventDefault();
		gameover(true,`${winningnum} is correct! You Won`);

				 e.preventDefault();
			}else{
	 			// gameleft --;
	 			gameleft -= 1; //2 1 
			
				//console.log(gameleft);

				if(gameleft === 0){
					//GameOver LOST

				//console.log("You Lose");

				// disabled getinput
				getinput.disabled = true;

				//getinput border color to red
				// getinput.style.borderColor = "red";

				// message 1 
				// message1.textContent = `Game Over, You Lost, The correct number is ${winningnum}`;
				// message1.style.color = "red";

				// setmessage1(`Gameover , You Lost, the correct number is ${winningnum}`,"red")
				
				//play again ?
				// getbtn.value = "Play Again";
				
				gameover(false,`Gameover , You Lost, the correct number is ${winningnum}`)

				}else{
					//Continue Game

					//getinput border color to red
					getinput.style.borderColor = "red";

				// message1
					// message1.textContent = `${guess} is not correct!, ${gameleft} guess left.`;
					// message1.style.color = "blue";
					setmessage1(`${guess} is not correct!, ${gameleft} guess left.`,"blue")
					//clear getinput old value
					getinput.value = "";

					//auto focus getinput
					getinput:focus();
					e.preventDefault();
				}
					
			}
			e.preventDefault();
});
		




function setmessage1(msg,color){

	message1.textContent = msg;
	message1.style.color = color; 

}
function setmessage2(msg,color){
	message2.textContent = msg;
	message2.style.color = color;

	setTimeout(function(){
		message2.textContent = ""
	},2000);

}




function gameover(won,msg){

	let color;

	won === true ? color = "green" : color = "red";
	//disable getinput
	getinput.disabled = true;

	//getinput.border color to red
	getinput.style.borderColor = color;
	message1.style.color = color;

	//message1
	setmessage1(msg,color)

	// play again?
	getbtn.value = "Play Again";


	//Add Class
	// getbtn.className= "btn playagain";
	getbtn.classList.add('playagain');

}

		


getgameform.addEventListener('mousedown',function(e){
	// console.log(e.target);
	// e.target.classList.contains('playagain'
	if(e.target.className === "btn playagain"){
		// console.log('i am working');


		window.location.reload();
	}

});



function randomnum(){
	let getrdn = Math.floor(Math.random()*(max-min)+min);
	return getrdn;
}


// console.log(randomnum(1,10))
console.log(winningnum);