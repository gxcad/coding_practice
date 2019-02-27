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

function nbaCup(resultSheet, toFind) {
  if (!toFind.length) return '';
  let regex = new RegExp(toFind, 'i');
  let games = resultSheet.split(',');
  let filterGames = games.filter(game => game.match(regex));
  let teams = {};
  
  for (game of filterGames) {
    let team1 = {};
    let team2 = {};
    let teamName = [];
    let words = game.trim().split(' ');
    for (word of words) {
      if (word.match(/[a-z]/i)) teamName.push(word);
      else {
        let joinedTeamName = teamName.join(' ');
        if (!Object.keys(team1).length) {
          team1.name = joinedTeamName;
          team1.score = parseFloat(word);
        } else if (!Object.keys(team2).length) {
          team2.name = joinedTeamName;
          team2.score = parseFloat(word);
          if (toFind !== team1.name && toFind !== team2.name) return toFind + ':This team didn\'t play!';
          if (!Number.isInteger(team1.score) || !Number.isInteger(team2.score)) return 'Error(float number):' + team1.name + ' ' + team1.score + ' ' + team2.name + ' ' + team2.score;
          if (team1.score > team2.score) team1.win = true;
          else if (team2.score > team1.score) team2.win = true;
          if (!teams[team1.name]) {
            teams[team1.name] = {
              scored: 0,
              allowed: 0,
              wins: 0,
              draws: 0,
              losses: 0
            }
          }
          if (!teams[team2.name]) {
            teams[team2.name] = {
              scored: 0,
              allowed: 0,
              wins: 0,
              draws: 0,
              losses: 0
            }
          }
          teams[team1.name].scored += team1.score;
          teams[team1.name].allowed += team2.score;
          teams[team2.name].scored += team2.score;
          teams[team2.name].allowed += team1.score;
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
        teamName = [];
      }
    }
  }
  let thisTeam = teams[toFind];
  return toFind + ':W=' + thisTeam.wins + ';D=' + thisTeam.draws + ';L=' + thisTeam.losses + ';Scored=' + thisTeam.scored + ';Conceded=' + thisTeam.allowed + ';Points=' +(thisTeam.wins * 3 + thisTeam.draws);
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

let r1 = "Los Angeles Clippers 104 Dallas Mavericks 88,New York Knicks 101 Atlanta Hawks 112,Indiana Pacers 103 Memphis Grizzlies 112,"
    + "Los Angeles Lakers 111 Minnesota Timberwolves 112,Phoenix Suns 95 Dallas Mavericks 111,Portland Trail Blazers 112 New Orleans Pelicans 94,"
    + "Sacramento Kings 104 Los Angeles Clippers 111,Houston Rockets 85 Denver Nuggets 105,Memphis Grizzlies 76 Cleveland Cavaliers 106,"
    + "Milwaukee Bucks 97 New York Knicks 122,Oklahoma City Thunder 112 San Antonio Spurs 106,Boston Celtics 112 Philadelphia 76ers 95,"
    + "Brooklyn Nets 100 Chicago Bulls 115,Detroit Pistons 92 Utah Jazz 87,Miami Heat 104 Charlotte Hornets 94,"
    + "Toronto Raptors 106 Indiana Pacers 99,Orlando Magic 87 Washington Wizards 88,Golden State Warriors 111 New Orleans Pelicans 95,"
    + "Atlanta Hawks 94 Detroit Pistons 106,Chicago Bulls 97 Cleveland Cavaliers 95,";
let r2 = "San Antonio Spurs 111 Houston Rockets 86,Chicago Bulls 103 Dallas Mavericks 102,Minnesota Timberwolves 112 Milwaukee Bucks 108,"  
    + "New Orleans Pelicans 93 Miami Heat 90,Boston Celtics 81 Philadelphia 76ers 65,Detroit Pistons 115 Atlanta Hawks 87,"  
    + "Toronto Raptors 92 Washington Wizards 82,Orlando Magic 86 Memphis Grizzlies 76,Los Angeles Clippers 115 Portland Trail Blazers 109,"  
    + "Los Angeles Lakers 97 Golden State Warriors 136,Utah Jazz 98 Denver Nuggets 78,Boston Celtics 99 New York Knicks 85,"  
    + "Indiana Pacers 98 Charlotte Hornets 86,Dallas Mavericks 87 Phoenix Suns 99,Atlanta Hawks 81 Memphis Grizzlies 82,"  
    + "Miami Heat 110 Washington Wizards 105,Detroit Pistons 94 Charlotte Hornets 99,Orlando Magic 110 New Orleans Pelicans 107,"  
    + "Los Angeles Clippers 130 Golden State Warriors 95,Utah Jazz 102 Oklahoma City Thunder 113,San Antonio Spurs 84 Phoenix Suns 104,"  
    + "Chicago Bulls 103 Indiana Pacers 94,Milwaukee Bucks 106 Minnesota Timberwolves 88,Los Angeles Lakers 104 Portland Trail Blazers 102,"  
    + "Houston Rockets 120 New Orleans Pelicans 100,Boston Celtics 111 Brooklyn Nets 105,Charlotte Hornets 94 Chicago Bulls 86,Cleveland Cavaliers 103 Dallas Mavericks 97";
let teams = "Los Angeles Clippers,Dallas Mavericks,New York Knicks,NYK,Atlanta Hawks,Indiana Pacers,Memphis Grizzlies,"
    + "Los Angeles Lakers,Minnesota Timberwolves,Phoenix Suns,Portland Trail Blazers,New Orleans Pelicans,"
    + "Sacramento Kings,Los Angeles Clippers,Houston Rockets,Denver Nuggets,Cleveland Cavaliers,Milwaukee Bucks,"
    + "Oklahoma City Thunder, San Antonio Spurs,Boston Celtics,Philadelphia 76ers,Brooklyn Nets,Chicago Bulls,"
    + "Detroit Pistons,Utah Jazz,Miami Heat,Charlotte Hornets,Toronto Raptors,Orlando Magic,Washington Wizards,"
    + "Golden State Warriors,Dallas Maver";
let r = r1 + r2;

console.log(nbaCup(r, "Los Angeles Clippers")) // -> "Los Angeles Clippers:W=1;D=0;L=1;Scored=204;Conceded=208;Points=3"

console.log(nbaCup(r, "Boston Celtics")) // -> "Boston Celtics:W=1;D=0;L=0;Scored=120;Conceded=100;Points=3"

console.log(nbaCup(r, "")) // -> ""

console.log(nbaCup(r, "Boston Celt")) // -> "Boston Celt:This team didn't play!"

let r0 = "New York Knicks 101.12 Atlanta Hawks 112"
console.log(nbaCup(r0, "Atlanta Hawks")) // -> "Error(float number):New York Knicks 101.12 Atlanta Hawks 112"