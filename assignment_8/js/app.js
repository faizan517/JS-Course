function sleepFor( sleepDuration ){
  var now = new Date().getTime();
  while(new Date().getTime() < now + sleepDuration){ /* do nothing */ }
}


var over = +prompt("enter number of overs")

var firstTeam = prompt("enter first team name")
var secondTeam = prompt("enter second team name")
sleepFor(1000)


var pass =console.log("the match is between" + " " + firstTeam + " " + "vs"+ " " + secondTeam)
var toss = Math.round(Math.random() * 2)
sleepFor(3000)

if(toss == 2){
  console.log(firstTeam + " won the toss and elected bat first")
  sleepFor(1000)
  console.log(over +' ' + "over match started," + firstTeam + ' ' + "is to bat.")
  sleepFor(2000)
}
else {
  console.log(secondTeam + " won the toss and elected bat first")
  sleepFor(1000)
  console.log(over+ ' ' + "over match started," + secondTeam +' ' + "is to bat")
  sleepFor(2000)
}


var team1Score = 0;
var team1Wickets = 0;

for (var i = 1; i <= over; i++) {
sleepFor(1000)
  for (var j = 1; j < 7; j++) {
    if (team1Wickets < 10) {
      var score = Math.round(Math.random() * 6);
      if (score == 0) {
          console.log(" Dot ball; balls " +j+" overs "+i);
      } else if (score == 1) {
          team1Score = team1Score + 1;
          console.log("Got 1 run == balls " +j+" overs "+i);
      } else if (score == 2) {
          team1Score = team1Score + 2;
          console.log("Got 2 runs == balls " +j+" overs "+i);
      } else if (score == 3) {
          team1Score = team1Score + 3;
          console.log("Got 3 run  ==  balls " +j+" overs "+i);
      } else if (score == 4) {
          team1Score = team1Score + 4;
          console.log("Wao! Super 4  ==  balls " +j+" overs "+i);
      } else if (score == 5) {
          ++team1Wickets;
          console.log("Ohhh! You are out balls " +j+" overs "+i);
      } else if (score == 6) {
          team1Score = team1Score + 6;
          console.log("Amaizing! What a Six == balls " +j+" overs "+i);
      }
      
  }
  else{
      break; 
  }sleepFor(2000);
    
  }
}
console.log( " score " + score + " / " + team1Wickets)
sleepFor(4000)
var team2Score = 0;
var team2Wickets = 0;

for (var i = 1; i <= over; i++) {
sleepFor(1000)
  for (var j = 1; j < 7; j++) {
    if (team2Wickets < 10) {
      var score = Math.round(Math.random() * 6);
      if (score == 0) {
          console.log("Ohhh! Dot ball Balls " +j+" overs "+i);
      } else if (score == 1) {
          team2Score = team2Score + 1;
          console.log("Got 1 run == balls " +j+" overs "+i);
      } else if (score == 2) {
          team2Score = team2Score + 2;
          console.log("Got 2 runs == balls " +j+" overs "+i);
      } else if (score == 3) {
          team2Score = team2Score + 3;
          console.log("Got 3 run  ==  balls " +j+" overs "+i);
      } else if (score == 4) {
          team2Score = team2Score + 4;
          console.log("Wao! Super 4  ==  balls " +j+" overs "+i);
      } else if (score == 5) {
          ++team2Wickets;
          console.log("Ohhh! You are out balls" +j+" overs "+i);
      } else if (score == 6) {
          team2Score = team2Score + 6;
          console.log("Amaizing! What a Six == balls " +j+" overs "+i);
      }
      
  }
  else{
      break; 
  }sleepFor(2000);
    
  }
}

console.log("score " + score + " / " + team2Wickets)
sleepFor(1000)

if (team1Score > team2Score) {
  console.log(firstTeam +" " + "win the match")
}
else if(team1Score = team2Score){
console.log("match draw")
}
else{
  console.log(secondTeam +" " + "win the match")
}


