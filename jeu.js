console.log('jeu démarré');
let gamezone = document.getElementById('gamezone');
let box = document.querySelector('.box');
let endscreen= document.getElementById('endscreen');
//console.log(box);
let click = 0;
let scoreElement = document.querySelector('#score');

let chrono = 60;
gameover = 0;
loopPlay = false;
let chronoElement = document.querySelector('#chrono');
chronoElement.innerHTML = chrono;

box.addEventListener("click", () => {
    //console.log('click sur la box !');
    click += 1;
    scoreElement.innerHTML = click;
    let randomLeft = Math.floor(Math.random() * (gamezone.clientWidth - box.clientWidth));
let randomTop = Math.floor(Math.random() * (gamezone.clientHeight - box.clientHeight));
box.style.left = randomLeft + 'px';
box.style.top = randomTop + 'px';
    //let top = Math.floor(Math.random() * window.innerHeight);
   // let left = Math.floor(Math.random() * window.innerWidth);
    //while (top <= 400)
    //box.style.top = "10px";
//box.styles.backgroundColor = "red";
 //  box.style.top = `${top}px`;
   //box.style.left = `${left}px`;


});

var score = 0;

console.log("Score: " + score);
var scoreObj = {
    score: 0,
    nametag: "John",
};

console.log("Score :" + scoreObj.score);
console.log("Joueur :" +scoreObj.playerName);

var scoreDiv = document.getElementById("score");
var score = 0;
scoreDiv.innerHTML = "Score :" + score;




const gameend = () => {
    endscreen.innerHTML = `<div class="gameover">Fin de partie <br/>score: ${score}
    </div>`;
    endscreen.style.visibility = 'visible';
    endscreen.style.opacity ='1';
    loopPlay = false;
};

setInterval(() => {
    
   // console.log("timer"); 
   if (chrono != 0){
   chrono --;
   chronoElement.innerHTML = chrono;
   }  else if (chrono<=0){
    gameover
   }
    
}, 1000)
