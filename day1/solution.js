/* eslint-disable require-jsdoc */
fs = require('fs');
const readline = require('readline');



async function loadData() {
  const readInterface = readline.createInterface({
    input: fs.createReadStream('input.txt'),
    console: false,
  });
  let numbers = [];
  let total_temp = 0;
  for await (const line of readInterface) {
    if(line === ""){
        numbers.push(total_temp);
        total_temp = 0;
    } else {
        total_temp += parseInt(line);
    }
  }
  numbers.sort((a,b) => b - a);

  console.log(numbers[0]);
  console.log(numbers[0] + numbers[1] + numbers[2]);
}

loadData();

