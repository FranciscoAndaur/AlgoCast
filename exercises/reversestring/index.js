// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    debugger;
    return str.split('').reduce((rev, char) => char + rev, '');
}
module.exports = reverse;

reverse('asdf')
/* SOLUTION 1 */
    // const result = str.split('');
    // result.reverse();
    // return result.join('');

    /* SOLUTION 2 */
    // return str
    // .split('')
    // .reverse()
    // .join('');

    /* SOLUTION 3 */
    // //Create an empty string called 'reversed'
    //  let reversed  = '';
    //  //for each character in the provided string
    //  for (let character of str) {
    //     //Take the character and add it to the start of reversed
    //     reversed = character + reversed;
    //  }
    // //return the variable 'reversed'
    // return reversed

    /* SOLUTION 4 */