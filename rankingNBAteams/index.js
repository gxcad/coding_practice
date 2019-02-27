// You are given a string with results of NBA teams (see the data in "Sample Tests") separated by commas e.g:

// A team name is composed of one, two or more words built with letters or digits: Atlanta Hawks, Philadelphia 76ers...

// Given a string of results and the name of a team (parameter : to_find) your function nba_cup (or nbaCup or ...) will return as a string

//     the name of the team followed by : and
//     the number of matches won by the team
//     the number of draws
//     the number of matches lost by the team
//     the total number of points scored by the team
//     the total number of points conceded by the team

// and finally a kind of marks in our ranking system

//     a team marks 3 if it is a win
//     a team marks 1 if it is a draw
//     a team marks 0 if it is a loss.

// The return format is:

// "Team Name:W=nb of wins;D=nb of draws;L=nb of losses;Scored=nb;Conceded=nb;Points=nb"

// #Remarks: The team name "" returns "".

// If a team name can't be found in the given string of results you will return "Team Name:This team didn't play!" (See examples below).

// The scores must be integers. If a score is a float number (abc.xyz...) you will return: "Error(float number):the concerned string"

//need to parse out team names and their scores, and game won or lost
//need to sum total points scored per team
//need to sum total points allowed

// let testObj = [{
//   team: 'Los Angeles Lakers',
//   scored: 205,
//   allowed: 200,
//   wins: 2,
//   draws: 0,
//   losses: 1
// }]

// const parser = resultSheet => {
//   let teams = {};
//   let splitted = resultSheet.split(' ');

//   for (word of splitted) {
//     let team = [];
//     let score = '';
//     if (word.match(/\w/)) team.push(word);
//     else if (word.match(/\d/)) {
//       score.push(word);
//       teamsAndScores[team.join(' ')]
//     }
//   }
//   teamsAndScores[]
// }

function nbaCup(resultSheet, toFind) {
  let regex = new RegExp(toFind, 'i');
  let games = resultSheet.split(',');
  let filterGames = games.filter(game => game.match(regex));
  let teams = {};
  let regexChar = /\w/i;
  let team1 = {}; //{
    //Name: 'Los Angeles Lakers',
    //Score: 120,
    //Win: true
  //};
  let team2 = {}; //{
    //Name: 'Denver Nuggets',
    //Score: 100,
    //Win: false
  //};
  
  for (game of filterGames) {
    let teamName = [];
    let words = game.trim().split(' ');
    for (word of words) {
      if (word.match(/\w/i)) teamName.push(word);
      else {
        let joinedTeamName = teamName.join(' ');
        if (!Object.keys(team1).length) {
          team1.name = joinedTeamName;
          team1.score = word;
        }
        else if (!Object.keys(team2).length) {
          team2.name = joinedTeamName;
          team2.score = word;
          if (team1.score > team2.score) team1.win = true;
          else if (team2.score < team1.score) team2.win = true;
          else team1.draw = true;
        }
        else {
          if (!teams[team1.name]) {
            teams[team1.name] = {
              scored: team1.score,
              allowed: team2.score,
              wins: 0,
              draws: 0,
              losses: 0
            }
          }
          if (!teams[team2.name]) {
            teams[team2.name] = {
              scored: team2.score,
              allowed: team1.score,
              wins: 0,
              draws: 0,
              losses: 0
            }
          }
            if (team1.win) {
              teams[team1.name].wins += 1;
              teams[team2.name].losses += 1;
            } else if (team2.win) {
              teams[team2.name].wins += 1;
              teams[team1.name].losses += 1;
            } else {
              teams[team1.name].draws += 1;
              teams[team2.name].draws += 1;
            }
          
        }
      }
    }
  }
}

// teams = {
//   Clippers: {
//     Scored: 308,
//     Allowed: 292,
//     Wins: 2,
//     Draws: 0,
//     Losses: 0
//   },
//   Lakers: {
//     Scored: 300,
//     Allowed: 318,
//     Wins: 1,
//     Draws: 0,
//     Losses: 1
//   }
// };

// Examples:

let r = 'Los Angeles Clippers 104 Dallas Mavericks 88,New York Knicks 101 Atlanta Hawks 112,Indiana Pacers 103 Memphis Grizzlies 112, Los Angeles Clippers 100 Boston Celtics 120'

console.log(nbaCup(r, "Los Angeles Clippers")) // -> "Los Angeles Clippers:W=1;D=0;L=1;Scored=204;Conceded=208;Points=3"

// console.log(nbaCup(r, "Boston Celtics")) // -> "Boston Celtics:W=1;D=0;L=0;Scored=120;Conceded=100;Points=3"

// console.log(nbaCup(r, "")) // -> ""

// console.log(nbaCup(r, "Boston Celt")) // -> "Boston Celt:This team didn't play!"

// let r0 = "New York Knicks 101.12 Atlanta Hawks 112"
// console.log(nbaCup(r0, "Atlanta Hawks")) // -> "Error(float number):New York Knicks 101.12 Atlanta Hawks 112"