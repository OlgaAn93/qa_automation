function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString('Amazing'));


function isPalindrome (some_str){
    let reversedString = some_str.split('').reverse().join('');
    console.log (some_str);
    console.log(reversedString);
    if (some_str === reversedString){
        return true
    } else {
        return false
    }
     
}
console.log(isPalindrome('noon'));
console.log(isPalindrome('olia')); 

function evenNumbers (array) {
    let arrayEvenNumbers = array.filter((i)=> i % 2 === 0); 
    console.log(arrayEvenNumbers);
}

evenNumbers([1, 2, 3, 4, 5, 6]);

function arrayReversed (array) {
    console.log(array.reverse());
}

arrayReversed ([1, 2, 3, 4, 5]);