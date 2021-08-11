// Write a function findLongestWord that takes an array of words and returns the length of the longest one.     

function findLongestWord(str) {
    const splStrArray = str.split(" ");
  
    const orderedArray = splStrArray.sort((a, b) => b.length - a.length)
  
    const longestWord2 = orderedArray[0]
    return longestWord2
  
  }
  
  findLongestWord("Coding Is Hard to Learn But Fun To Be Able To Create ")
