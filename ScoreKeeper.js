
// button one selected
var btt1 = document.querySelector("#p1");

// button two selected

var btt2 = document.querySelector("#p2");

 // button reset selected

 var reset = document.querySelector("#reset");  

 // variable for selecting input

 var inp = document.querySelector("input");

  // selecting the span to update a number of lots(partija)

  var p = document.querySelector("p span"); 

// variable for countig the score, and she is starts from 0


var display = 0;

 // variable for counting the score for second player from 0

 var secDisplay = 0;  

// selecting first span id in h1 for displaying a score for the player one
var fspan = document.querySelector("#first"); 
// selecting the second span id in h1 for displaying a score for the second player

var sSpan = document.querySelector("#second"); 

// variable for gameover

var gameOver = false; 
var gameWinning = 5; 


// add event for btn one(first player)
btt1.addEventListener("click", function(){
	if(!gameOver){
		display++;
		if(display === gameWinning){
			fspan.classList.add("winner"); 
			gameOver = true; 
		}
	}
	  
	 fspan.textContent = display; 
});

// add event for btn two(second player)

btt2.addEventListener("click", function(){
	if(!gameOver){
		secDisplay++;
		if(secDisplay === gameWinning){
			sSpan.classList.add("winner");
			gameOver = true; 
		}
	}
	 
	sSpan.textContent = secDisplay; 
});

// add event to reset the result

reset.addEventListener("click", function(){
 	rst(); 
});

// building a function to reset score when ever we wont to change it

function rst() {
	display = 0; 
	secDisplay = 0; 
	fspan.textContent = 0; 
	sSpan.textContent = 0; 
	fspan.classList.remove("winner");
	sSpan.classList.remove("winner"); 
	gameOver = false;
}

// add event to update number of lots(partija)

inp.addEventListener("change", function(){
	 p.textContent = inp.value; 
	 gameWinning = Number(inp.value); 
	 rst(); 
});