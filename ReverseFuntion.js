// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

function reverse(str) {
    var text = '';
    
    for (var i = str.length - 1; i >= 0; i--) {
    	text += str[i];
    	continue
    }
    return text.toLowerCase();
}
console.log(reverse("jag tester"));