// Part 1: Thinking Functionally

// Take an array of numbers and return the sum.

function sumArray(numbers){
    return numbers.reduce((sum,num)=> sum + num, 0)
}
var numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers));


function averageArray(numbers) {
    if (numbers.length === 0) return 0;
    return sumArray(numbers) / numbers.length;
  }
var numbers = [1, 2, 3, 4, 5];
console.log(averageArray(numbers));

function averageArray(numbers) {
    if (numbers.length === 0) return 0;
    return sumArray(numbers) / numbers.length;
  }
  var numbers = [1, 2, 3, 4, 5];
  console.log(averageArray(numbers));

