// define a funtion maxofThree that takes three numbers as arguments and returns the largest of them.
function maxOfThree(a, b, c) {
    if ((a >= b) && (a >= c)) { 
        return a;
    } else if ((b >= a) && (b >= c)) {
        return b;
    } else {
        return c;
    }
}

console.log(maxOfThree(55,230,550));