//var Anagram = function(input) {};
// {
// 	return input;
// };

// String.prototype.matches = function()
// {
// 	var matchList = [];
// 	return matchList;
// };

//module.exports = Anagram;


// -----------------------------------


/**
 * Converts a string to an array of characters, sorted alphabetically.
 */
// String.prototype.toSortedCharArray = function() {
//     return this.toLowerCase().split('').sort();
// };

// /**
//  * Checks whether two arrays are equal. Could have saved lines of code
//  * by using [].toString() and running === comparison on strings, but
//  * quick research indicated it is less efficient than looping through
//  * the arrays. Gained efficiency/readability at cost of extra lines.
//  */
// Array.prototype.equals = function (that) {
//     var n = this.length;
    
//     if (n !== that.length) {
//         return false;
//     }
    
//     while (n--) {
//         if (this[n] !== that[n]) {
//             return false;
//         }
//     }
    
//     return true;
// };

// module.exports = function (input) {
//     var sortedInputCharArray = input.toSortedCharArray();

//     this.matches = function (matches) {
//         var n;
        
//         if (arguments.length > 1) {
//            matches = Array.prototype.slice.call(arguments, 0);
//         }
        
//         n = matches.length;
        
//         while (n--) {
//             if (sortedInputCharArray.equals(matches[n].toSortedCharArray()) === false) {
//                 matches.splice(n, 1);
//             }
//         }

//         return matches;
//     };

//     return this;
// };
    //this and that make it confusing.

var anagram = function( word ){
    this.sortedinput = word.toLowerCase().split('').sort().join('');
    return {
        matches : function(wordlist){
            return wordlist.filter( function( word ){
                return word.toLowerCase().split('').sort().join('') == this.sortedinput; 
            });
        }
    }
}

module.exports = anagram;

// var anagrams = function( input, wordlist ){
//     // sort the input word
//     var sortedinput = input.split('').sort().join(''); 
//     // filter the array by checking if...
//     return wordlist.filter( function( word ){
//         // ...the word after sorting matches the sorted input
//         return word.split('').sort().join('') == sortedinput; 
//     });
// }



function anagram(word) {
    var wordsort = word.toLowerCase().split("").sort().join("");

    this.matches = function(array){
        var found = [];

        if(typeof array == "string"){
            for(var i = 0; i < arguments.length; i++){
                var strsort = arguments[i].toLowerCase().split("").sort().join("");
                if (strsort === wordsort){
                    found.push(arguments[i]);
                }
            }
        } else {
            for(var i = 0; i < array.length; i++) {
                var arrsorted = array[i].toLowerCase().split("").sort().join("");
                if (array[i].toLowerCase() === word.toLowerCase()) {
                    break;
                }
                if (arrsorted === wordsort) {
                    found.push(array[i]);
                } 
            }
        }

        return found;
    };
    return this;
};

module.exports = anagram;
