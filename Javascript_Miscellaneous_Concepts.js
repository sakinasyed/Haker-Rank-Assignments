// 1. Write a JavaScript program to test the first character of a string is uppercase or not using regex
function upperCaseTest(str){
    regexp = /^[A-Z]/;
    if (regexp.test(str)){
      return true;
    }
    return false;
  }
  console.log(upperCaseTest("abcd"))
  console.log(upperCaseTest("ABCD"))

// 2. Write a JavaScript function to count the number of vowels in a given string using regex
const vowel_count = str => {
    let result = str.match(/[aeiou]/gi)
    let count = result.length
    console.log(count)
  }
  
  vowel_count("The quick brown fox jumps over the lazy dog")  

// 3. Write a JavaScript function to check whether a given value is alphanumeric or not using regex
function is_alphanumeric(str){
    regexp = /^[A-Za-z0-9]+$/;
    if (regexp.test(str)){
      return true;
    }
    return false;
  }
  console.log(is_alphanumeric("37828sad"))
  console.log(is_alphanumeric("3243#$sew"))

// 4. Write a JavaScript function to check whether a given value is hexcolor value or not using regex
function is_hexacolor(str){
    regexp = /#[0-9A-Fa-f]{3}/g;
    if (regexp.test(str)){
      return true;
    }
    return false;
  }
  console.log(is_hexacolor("#444"))
  console.log(is_hexacolor("3333"))