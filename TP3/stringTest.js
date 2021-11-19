function repeatTest()
{
    console.log(repeat("foo", 3)); // => foofoofoo
}

function trunctateTest()
{
    console.log(trunctate("unchanged text", 20)); // => unchanged text
    console.log(trunctate("unchanged text", 14)); // => unchanged text
    console.log(trunctate("truncated text", 10)); // => truncat...
}

function isPalindromeTest()
{
    console.log(isPalindrome("bonjour")); // => false
    console.log(isPalindrome("toto")); // => false
    console.log(isPalindrome("kayak")); // => true
    console.log(isPalindrome("ressasser")); // => true
}

function swapCaseTest()
{
    console.log(swapCase("HELLO")); // => hello
    console.log(swapCase("bye")); // => BYE
    console.log(swapCase("GooD NighT")); // => gOOd nIGHt
}

function hexadecimalToDecimalTest()
{
    console.log(hexadecimalToDecimal("F")); // => 15
    console.log(hexadecimalToDecimal("11")); // => 17
    console.log(hexadecimalToDecimal("7E3")); // => 2019
}

function mirrorTest()
{
    console.log(mirror("abcxyz")); // => zyxcba
    console.log(mirror("javascript")); // => qzezhxirkg
    console.log(mirror(mirror("identique"))); // => identique
}