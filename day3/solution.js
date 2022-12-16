/* eslint-disable require-jsdoc */
fs = require('fs');
const readline = require('readline');

function part1(input) {
    let total = 0;
    let stuff = [];

    for(const line of input) {
        let firstHalf = line.slice(0,line.length /2).split('')
        let secondHalf = line.slice(line.length/2, line.length).split('');
        let dupedLetters = new Set();

        for(const letter of secondHalf) {
            if (firstHalf.find((c) => c === letter)) {
                dupedLetters.add(letter)
            }
        }
        stuff = [...stuff, ...dupedLetters]
    }
    for(const letter of stuff) {
        let value = letter.charCodeAt();
        value -= value < 91 ? 38 : 96;

        total += value;
    }
    return total;
}


function part2(input) {
    let total = 0;
    let stuff = [];
    let index = 1;
    let tempWorkings = [];
    for(const line of input) {

        tempWorkings.push(line);

        if(index % 3 === 0) {
            let a = new Set();
            let items = {}
            for(let bag of tempWorkings) {
                for(let char of bag) {
                    a.add(char);
                }
                for(let item of a) {
                    if(items.hasOwnProperty(item)) {
                        items[item] += 1;
                    } else {
                        items[item] = 1;
                    }
                }
                a = new Set()
            }
            tempWorkings = [];
            let badge = Object.keys(items).find(key => items[key] === 3);
            stuff.push(badge)
        }
        index++;
    }
    for(const letter of stuff) {
        let value = letter.charCodeAt();
        value -= value < 91 ? 38 : 96;

        total += value;
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
    console.log(part1(input));
    console.log(part2(input));
}

function test() {
    let input = [
        'vJrwpWtwJgWrhcsFMMfFFhFp',
        'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
        'PmmdzqPrVvPwwTWBwg',
        'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
        'ttgJtRGJQctTZtZT',
        'CrZsJsPPZsGzwwsLwLmpwMDw',
    ]
    console.log(part1(input))
    console.log(part2(input))
}
loadData();
// test()
