/* eslint-disable require-jsdoc */
fs = require('fs');
const { assert } = require('console');
const readline = require('readline');

function part1(input) {
    let total = 0;

    return total;
}

function part2(input) {
    let total = 0;

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
    let inputParsed = parseData(input);

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
    let inputParsed = parseData(input);
    let part1Solution = part1(inputParsed);
    console.log(part1Solution)
    assert(part1Solution === 2)

    // let part2Solution = part2(inputParsed);
    // console.log(part2Solution);
    // assert(part2Solution === 4)
}
function parseData(input) {
    let data = [];
    for(const line of input) {
        data.push(line);
    }
    return data;
}


// loadData();
test()
