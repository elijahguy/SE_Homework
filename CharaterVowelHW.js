// Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function vowelChecker(x) {
    // vowelChecker will grab the first letter (character)...
    var firstChar = x.toLowerCase().charAt(0);

    // Then check if that first letter is a vowel.
    if (firstChar === "a" || firstChar === "e" || firstChar === "i" || firstChar === "o" || firstChar === "u") {
        // If so... it will log true.
        console.log(true);
    } else {
        // If not... it will log false.
        console.log(false);
    }
}
