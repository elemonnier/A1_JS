function repeat (s, n)
{
    let copy = s;
    for (let counter = 0; counter < n-1; counter++)
    {
        s = s + copy;
    } 
    return s;
}

function trunctate (s, n)
{
    if (s.length > n)
    {
        let k = s.substring(0, n-3);
        s = k + "...";
        return s;
    }
    else
    {
        return s;
    }
}

function isPalindrome (s)
{
    let c = 0;
    for (let counter = 0; counter < parseInt(s.length/2); counter++)
    {
        if (s[counter] == s[s.length-counter-1])
        {
            c++;
        }
    }
    if (c === parseInt((s.length)/2))
    {
        return true;
    }
    else
    {
        return false;
    }
}

// function isPalindromev2(s)
// {
//     return s === s.split("").reverse().join("");
// }

function swapCase(s)
{
    let stringCopy = [];
    for (let counter = 0; counter < s.length; counter++)
    {
        if (s[counter].charCodeAt() >= 65 && s[counter].charCodeAt() <= 90)
        {
            stringCopy[counter] = s[counter].toLowerCase();
        }
        if (s[counter].charCodeAt() >= 97 && s[counter].charCodeAt() <= 122)
        {
            stringCopy[counter] = s[counter].toUpperCase();
        }
        if (s[counter].charCodeAt() == 32)
        {
            stringCopy[counter] = s[counter];
        }
    }
    stringCopy = stringCopy.join("");
    return stringCopy;
}

function hexadecimalToDecimal(hex)
{
    let sum = 0;
    for (let counter = 0; counter < hex.length; counter++)
    {
        if (hex[counter].charCodeAt() >= 48 && hex[counter].charCodeAt() <= 57) // si "counter" est un nombre
        {
            sum = hex[counter]*(16**(hex.length-1-counter)) + sum; // ou +=
        }
        if (hex[counter].charCodeAt() == 65 || hex[counter].charCodeAt() == 97) // si "counter" est un 'A'
        {
            sum = 10*(16**(hex.length-1-counter)) + sum; 
        }
        if (hex[counter].charCodeAt() == 66 || hex[counter].charCodeAt() == 98) // si "counter" est un 'B'
        {
            sum = 11*(16**(hex.length-1-counter)) + sum;
        }
        if (hex[counter].charCodeAt() == 67 || hex[counter].charCodeAt() == 99) // si "counter" est un 'C'
        {
            sum = 12*(16**(hex.length-1-counter)) + sum;
        }
        if (hex[counter].charCodeAt() == 68 || hex[counter].charCodeAt() == 100) // si "counter" est un 'D'
        {
            sum = 13*(16**(hex.length-1-counter)) + sum;
        }
        if (hex[counter].charCodeAt() == 69 || hex[counter].charCodeAt() == 101) // si "counter" est un 'E'
        {
            sum = 14*(16**(hex.length-1-counter)) + sum;
        }
        if (hex[counter].charCodeAt() == 70 || hex[counter].charCodeAt() == 102) // si "counter" est un 'F'
        {
            sum = 15*(16**(hex.length-1-counter)) + sum;
        }
    }
    return sum; // traiter les autres caractères
}

function mirror(s)
{
    let k;
    let b;
    let sCopy = [];
    for (let counter = 0; counter < s.length; counter++)
    {
        k = s[counter].charCodeAt();
        b = 110 + 110 - k - 1
        sCopy[counter] = String.fromCharCode(b);
    }
    sCopy = sCopy.join("");
    return sCopy;
}