function palindrome(str) {
let string= str.toUpperCase()
const cleaned = string.replace(/[^A-Z0-9]/gi, '');
let reverseClean = cleaned.split('').reverse().join('');

console.log(reverseClean)

if (reverseClean === cleaned) {
    return true
}
else {
    return false 
 }
}
