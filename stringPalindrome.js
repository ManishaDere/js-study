function isPalindrome(str) {
    if(str.split("").reverse().join("") === str) {
        console.log("palindrome");
    } else {
        console.log("Is not palindrome");
    }
}

isPalindrome("ABCBA123");