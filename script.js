/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// global constants

//how long to hold each clue's light/sound
const clueHoldTime = 675;
//how long to pause in between clues
const cluePauseTime = 333;
//how long to wait before starting playback of the clue sequence
const nextClueWaitTime = 1000;
// to keep track of where the user is in the clue sequence


//Global Variables, default settings

// keeps track of the secret pattern of button presses
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
// represents how far along the player is in guessing the pattern
var progress = 0; 
// Boolean value that will keep track of whether the game is currently active - true once the user presses Start, and remain true until they win or lose, or press Stop
var gamePlaying = false;
// Sound tones
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;

// This function references our global variables
function startGame() {
  // initialize game variables
  progress = 0;
  gamePlaying = true;
  
  // swap the Start and Stop buttons
  
  // adds the "hidden" class to startBtn, hiding the Start button
  document.getElementById("startBtn").classList.add("hidden");
  // removes the "hidden" class from stopBtn, revealing the Stop button
  document.getElementById("stopBtn").classList.remove("hidden");
  // call this function
  playClueSequence();
}

// This function references our global variables
function stopGame() {
  // initialize game variables
  progress = 0;
  gamePlaying = false;
  
  // removes the "hidden" class to startBtn, hiding the Start button
  document.getElementById("startBtn").classList.remove("hidden");
  // adds the "hidden" class to startBtn, revealing the Start button 
  document.getElementById("stopBtn").classList.add("hidden");
}


// Sound Synthesis Functions


const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}

// When you call this function, it plays a tone for the amount of time specified
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

// startTone and stopTone break up playing the tone into two steps

// the tone will continue playing until you call stopTone
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}

function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

// Light up the buttons
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
}

// playing a single clue
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

// calls the stopGame function and summons alertbox with lose message
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

// calls the stopGame function and summons alertbox with win message
function winGame(){
  stopGame();
  alert("Great job. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  // add game logic here

  if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    //Guess was incorrect
    //GAME OVER: LOSE!
    loseGame();
  }
}    