/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */
 var sumOfArray = function(arraNumb){

     		var listofNumbers = 0;

     for (var i =0; i < arraNumb.length; i = i + 1) {
             listofNumbers = listofNumbers + arraNumb[i]
     }
  				return listofNumbers;
 }




console.assert(sumOfArray([3, 4]) === 7);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3, 4]) === 10);
console.assert(sumOfArray([10, 9, 8, 3, 4, 5, 6]) === 45);

// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.
var maxOfArray = function(arryOfNumbers) {
    var numnum = 0;
    for (var i = 0; i < arryOfNumbers.length; i++) {
        if (typeof arryOfNumbers[i] === 'string') {
            return null ;
        }
        if (arryOfNumbers[i] > numnum) {
            numnum = arryOfNumbers[i];
        }
    }
    return numnum;
}

console.assert(maxOfArray([2,4,3]) === 4);
console.assert(maxOfArray([10,9,8,100,7,6]) === 100);
console.assert( maxOfArray([1,8,'bucklemyshoe', 7]) === null);

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

 function isVowel(symbol) {
     if (typeof symbol === 'string') {
         if (symbol.length === 1) {
             if (symbol.toLowerCase() === 'a' || symbol.toLowerCase() === 'e' || symbol.toLowerCase() === 'i' || symbol.toLowerCase() === 'o' || symbol.toLowerCase() === 'u') {
                 return true;
             }
         }
     }
     return false;
 }

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */


 var reverseMe = function reverseMe(str){

         var splitsy = str.split("");

         splitsy = splitsy.reverse();

         var joinSplit = splitsy.join("");

         return joinSplit
 }


console.assert(reverseMe("books") === "skoob")
console.assert(reverseMe("we don't want no trouble") === "elbuort on tnaw t'nod ew")


/**
 * Part 4
 *
 * write a function the returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "FizZBuzZ"
 */

 var fizzbuzz =function (num) {
           var strFizz = ""
   for (var i = 1; i <= num; i = i+1) {
     if  (i % 3 != 0 && i % 5 != 0) {
           strFizz += "."
     } else if
       (i % 3 === 0 && i % 5 != 0){
       strFizz += "fizz";
     } else if
       (i % 5 === 0 && i % 3 != 0){
       strFizz += "buzz";
     } else if
       (i % 3 === 0 && i % 5 === 0 ){
       strFizz += "FizZBuzZ";
     }
   }
     return strFizz;
 }



console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")
console.assert(fizzbuzz(20) === "..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ..fizz.buzz")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string of
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */

function findLongestWord(sentence){
    for ( var i =0; i < sentence.length; i = i + 1);

}

console.assert(findLongestWord("a book full of dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")



/**
 * PART 6
 * -- ADVENTURE MODE --
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */



console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,10))
