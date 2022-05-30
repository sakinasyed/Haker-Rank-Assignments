// 1. Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers using recursion.
function gcd(a, b) {
    if ( ! b) {
       return a;
    }
    return gcd(b, a % b);   
 }
     console.log(gcd(2154, 458))

// 2. Write a JavaScript program to get the integers in range (x, y) using recursion.
var range = function(start_num, end_num) 
{
  if (end_num - start_num === 2) 
  {
    return [start_num + 1];
  } 
  else 
  {
    var list = range(start_num, end_num - 1);
    list.push(end_num - 1);
    return list;
  }
};

console.log(range(2,9).join('\r\n'));

// 3. Write a JavaScript program to compute the sum of a given array of integers using recursion.
function array_sum(array) {
    if (array instanceof Array){
        if (!array.some(isNaN)) {
            var total = 0;

            array.forEach(function (value) {
                total += value;
            });

            return total;
        }
    }
    }
    console.log(array_sum([1,2,3,4,5,6]))
