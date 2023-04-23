function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = '';

  for (let i = word.length-1; i >=0 ; i--) {
    reversedWord += word[i]
  }

  return reversedWord === word ? true : false;

  //alternative solution:

  // let wordReversedAsArr = word.split('').reverse();
  // let reversedWordAsStr = wordReversedAsArr.join('');
  // return reversedWordAsStr === word ? true : false;
}

/*
  Add your pseudocode here

  I -- string
  O -- boolean representing whether input word is a palindrome

  have variable reversedWord
  iterate over word input from end, pushing to reversedWord
  compare word to reversedWord
    if same, return true
    else return false

*/

/*
  Add written explanation of your solution here
  This is a sort of imperative approach, to actually create a new string and build it
  letter by letter, followed by a comparison of this new string with the original input.
  I believe there may be a 'reverse' function that can do this more succinctly and
  efficiently
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
