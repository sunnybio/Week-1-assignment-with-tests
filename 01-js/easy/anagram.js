/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()




  function getCount(string) {

    var dict = {}

    for (var i = 0; i < string.length; i++) {

      var listOfKeys = Object.keys(dict)

      if (listOfKeys.includes(string[i])) {

        dict[string[i]] += 1

      } else {
        dict[string[i]] = 1
      }
    }

    return dict

  }
  var charactersCounter1 = getCount(str1)
  var charactersCounter2 = getCount(str2)


  var listOfKeys1 = Object.keys(charactersCounter1)
  var listOfKeys2 = Object.keys(charactersCounter2)

  if (listOfKeys1.length != listOfKeys2.length) {
    return false
  }



  for (const i of listOfKeys1) {
    if (listOfKeys1.includes(i)) {
      if (charactersCounter1[i] != charactersCounter2[i]) {
        return false
      }
    } else {
      return false
    }

  }

  return true


}

module.exports = isAnagram;
