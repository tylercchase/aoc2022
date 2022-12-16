/* eslint-disable require-jsdoc */
fs = require('fs');
const { assert } = require('console');
const readline = require('readline');

function part1(input) {
    let total = 0;
    for(let line of input) {
        if(line[0].start >= line[1].start && line[0].start <= line[1].end
             && line[0].end >= line[1].start && line[0].end <= line[1].end) {
            total += 1;
        }else if(line[1].start >= line[0].start && line[1].start <= line[0].end &&
             line[1].end >= line[0].start && line[1].end <= line[0].end) {
            total += 1;
        } else {
        }

    }
    return total;
}

function part2(input) {
    let total = 0;
    for(let line of input) {
        if(line[0].start >= line[1].start && line[0].start <= line[1].end
            || line[0].end >= line[1].start && line[0].end <= line[1].end) {
            total += 1;
        } else if (line[1].start >= line[0].start && line[1].start <= line[0].end ||
            line[1].end >= line[0].start && line[1].end <= line[0].end) {
            total += 1;
        } else {
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
    // let part1Solution = part1(inputParsed);
    // console.log(part1Solution)
    // assert(part1Solution === 2)

    let part2Solution = part2(inputParsed);
    console.log(part2Solution);
    assert(part2Solution === 4)
}
function parseData(input) {
    let data = [];
    for(const line of input) {
        let a = line.split(',')
        a = a.map(x=>x.split('-'))
        data.push(
            [
                {
                    'start': parseInt(a[0][0]),
                    'end': parseInt(a[0][1])
                },
                {
                    'start': parseInt(a[1][0]),
                    'end': parseInt(a[1][1])
                }
            ]
        )
    }
    return data;
}


loadData();
// test()
