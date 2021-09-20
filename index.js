var readlineSync =  require('readline-sync');
const chalk = require('chalk');
const log = console.log

//chalk
const correct = chalk.bold.green;
const wrong = chalk.bold.red;
const rtans = chalk.bgYellow;
const qnop = chalk.bold.inverse;
const headfoot = chalk.bold.magenta;
const result = chalk.cyanBright
const urans = chalk.yellow;
const rowin = chalk.blue;

var score = 0;
var qno=0;
var inrow=0;

var highscore = [{
  name: "Aryak",
  score:4
},
{
  name: " Aryak1",
  score:3
}]

var questions = [{
  question: "What is the name of Thor's Hammer?\na)Aesir\nb)Fâner\nc)Mjolnir\nd)Rêquaer\n"+urans("Your Answer :\t"),
  answer: "c"
},
{
  question: "Who made Captain America’s shield?\na)Nick Fury\nb)Howard Stark\nc)Tony Stark\nd)Bruce Banner\n"+urans("Your Answer :\t"),
  answer: "b"
},
{
  question: "What is Captain America’s shield made of?\na)Adamantium\nb)Promethium\nc)Titanium\nd)Vibranium\n"+urans("Your Answer :\t"),
  answer :"d"
},
{
  question: "What type of doctor is Stephen Strange?\na)Cardiothoracic surgeon\nb)Neurosurgeon\nc)Plastic surgeon\nd)Trauma surgeon\n"+urans("Your Answer :\t"),
  answer :"b"
},
{
  question: "Which Iron Man suit was known as the Prodigal Son?\na)Mark 42\nb)Mark 36\nc)Mark 46\nd)Mark 41\n"+urans("Your Answer :\t"),
  answer :"a"
}];

function welcome() {
log(headfoot("Welcome to the Avengers Quiz!!!"));
var username = readlineSync.question("Please enter your name: ");
log("So "+username+" Lets Begin!\n")
}

function play(question, answer) {
  var userans = readlineSync.question(question);

  if (userans.toUpperCase() === answer.toUpperCase()) {
    log(correct("\nright!"));
    score +=2;
    inrow++
    if(inrow>=2)
    {
      log(rowin("WOW!! "+inrow+" in a row !!!"))
    }
    
  } else {
    log(wrong("\nwrong!"));
    log(rtans("The correct answer was "+answer));
    score -=1
    inrow = 0;
   
  }

  log("current score: ", score);
  log("\n-------------\n")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    qno++;
    log(qnop("Question no "+qno));
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function end(){
log(headfoot("Congratulation!!! You finished the Quiz"));
log("Your Final Score is "+result(score));
var accuracy = (score/((questions.length)*2))*100;
log("You answered "+result(accuracy+"%")+" of questions right!");
}


welcome();
game();
end();