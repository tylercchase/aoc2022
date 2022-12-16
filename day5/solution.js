/* eslint-disable require-jsdoc */
fs = require('fs');
const { assert } = require('console');
const readline = require('readline');

function part1(input) {
    let total = '';
    let grid = input.grid;
    for(let instruction of input.instructions) {
        for(let i = 0; i < instruction[0]; i++) {
            let element = grid[instruction[1]-1].pop()
            grid[instruction[2]-1].push(element);
        }
    }

    console.log(grid);
    for(let column of grid) {
        total += column[column.length - 1];
    }
    return total;
}

function part2(input) {
    let total = '';
    let grid = input.grid;
    for(let instruction of input.instructions) {
        let temp_stack = [];
        for(let i = 0; i < instruction[0]; i++) {
            let element = grid[instruction[1]-1].pop()
            temp_stack.unshift(element);
        }
        grid[instruction[2]-1] = [...grid[instruction[2]-1], ...temp_stack]
    }

    console.log(grid);
    for(let column of grid) {
        total += column[column.length - 1];
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
    inputParsed = parseData(input);
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
    assert(part1Solution === 'CMZ')
    inputParsed = parseData(input);

    let part2Solution = part2(inputParsed);
    console.log(part2Solution)
    assert(part2Solution === 'MCD')

}
function parseData(input) {
    let data = [];
    let grid = [];
    let temp_grid = [];
    let done_building = false;
    for (const line of input) {
        if (!done_building) {
            if (line === "") {
                temp_grid.pop() // we don't need the labels since they're just in order
                grid = [...Array(temp_grid[0].length)]
                grid = grid.map(x => [])
                for(let row of temp_grid) {
                    for(let i = 0; i < row.length; i++) {
                        if(row[i] !== '') {
                            grid[i].unshift(row[i])
                        }
                    }
                }
                done_building = true;
                continue;
            }
            let line_temp = []
            let whitespace_counter = 0;
            for (let character of line) {
                if (/\s/.test(character)) {
                    whitespace_counter++;
                }
                if (whitespace_counter === 4) {
                    line_temp.push('');
                    whitespace_counter = 0;
                }
                if (!(/\s/.test(character)) && character !== '[' && character !== ']') {
                    line_temp.push(character);
                    whitespace_counter = 0;
                }
            }

            temp_grid.push(line_temp);
        } else {

            let instructions = line.split(' from ')
            instructions = [instructions[0].split('move ')[1], ...instructions[1].split(' to ')]
            data.push(instructions);
            // format 0 = amount, 1 = from index, 2 = to index


        }
    }
    return {
        'grid': grid,
        'instructions': data
    };
}


loadData();
// test()
