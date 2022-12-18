/* eslint-disable require-jsdoc */
fs = require('fs');
const { assert } = require('console');
const readline = require('readline');

function part1(input) {
    let total = 0;
    for(let i = 0; i < input.length - 3; i++) {
        let checker = new Set();
        for(let x=0;x < 4; x++) {
            checker.add(input[i + x])
        }
        if(checker.size === 4) {
            total = i + 4;
            break;
        }
    }
    return total;
}

function part2(input) {
    let total = 0;
    for(let i = 0; i < input.length - 3; i++) {
        let checker = new Set();
        for(let x=0;x < 14; x++) {
            checker.add(input[i + x])
        }
        if(checker.size === 14) {
            total = i + 14;
            break;
        }
    }
    return total;
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
    let inputParsed = parseData(input)[0];

    console.log(part1(inputParsed))
    console.log(part2(inputParsed))
}
async function test() {
    const readInterface = readline.createInterface({
        input: fs.createReadStream('test.txt'),
        console: false,
    });
    let input = [];
    for await (const line of readInterface) {
        input.push(line)
    }
    for(let line of input) {
        console.log(line)
        let part1Solution = part1(line);
        console.log('test solution part1: ',part1Solution)
        console.log("===========================")
    }

    // let part2Solution = part2(inputParsed);
    // console.log(part2Solution);
    // assert(part2Solution === 4)
}
function parseData(input) {
    return input;
}


loadData();
// test()
