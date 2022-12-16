fs = require('fs');
const readline = require('readline');



function calculateGames(input) {
    let score = 0;
    let games = [];
    for(const line of input) {
        let game = line.split(' ');
        games.push({
            'opponent': game[0].charCodeAt() - 64,
            'player': game[1].charCodeAt() - 87
        })
    }
    for(let game of games) {
        score += game.player;
        if(game.player - game.opponent === 1  || game.player - game.opponent === -2) {
            score += 6;
        } else if(game.player === game.opponent) {
            score += 3;
        }
    }
    return score;
}
function part2(input) {
    let score = 0;
    let games = [];
    for(const line of input) {
        let game = line.split(' ');
        games.push({
            'opponent': game[0].charCodeAt() - 64,
            'expected': game[1].charCodeAt() - 87
        })
    }
    for(let game of games) {
        console.log(game);
        if(game.expected === 1) {
            let neededAction = game.opponent - 1;
            neededAction = neededAction === 0 ? 3 : neededAction;
            score += neededAction;
            console.log(`Losing with ${neededAction}`)

        } else if(game.expected === 2) {

            score += game.opponent + 3;
        } else {

            let neededAction = game.opponent + 1;
            neededAction = neededAction === 4 ? 1 : neededAction;
            console.log(`Winning with ${neededAction}`)
            score += neededAction;
            score += 6;
        }
    }
    return score;
}
async function loadData() {
  const readInterface = readline.createInterface({
    input: fs.createReadStream('input.txt'),
    console: false,
  });
  let input = [];
  for await (const line of readInterface) {
    input.push(line)
  }
  console.log(calculateGames(input));
  console.log(part2(input));
}
function test() {
    let input = [
        'A Y',
        'B X',
        'C Z'
    ]
    console.log(part2(input))
}
// test()
loadData();

