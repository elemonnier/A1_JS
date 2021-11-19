function sum(numbers)
{
    let k = 0;
    for (let counter = 0; counter < numbers.length; counter++)
    {
        k = numbers[counter] + k;
    }
    return k;
}

/*function sum(numbers)
{
    let k = 0;
    for (let number of numbers)
    {
        k = number + k;
    }
    return k;
}*/

function longestWord(words)
{
    let k = words[0];
    for (let counter = 1; counter < words.length; counter++)
    {
        if (words[counter].length > k.length)
        {
            k = words[counter];
        }
    }
    return k;
}

function range(min, max, step)
{
    let i = 0;
    let array = [];
    for (let counter = min; counter <= max; counter += step)
    {
        array[i] = counter;
        i++;
    }
    return array;
}

function nbOccurences(wordList, word)
{
    let i = 0;
    wordList = wordList.split(" ");
    for (let counter = 0; counter < wordList.length; counter++)
    {
        if (wordList[counter].length == word.length)
        {
            for (let counter2 = 0; counter2 < word.length; counter2++)
            {
                if (wordList[counter][counter2] != word[counter2])
                {
                    i--;
                    break;
                }
            }
            i++;
        }
    }
    return i;
}

function flatten2D(array)
{
    let newArray = [];
    let i = 0;
    for (let counter = 0; counter < array.length; counter++)
    {
        for (let counter2 = 0; counter2 < array[counter].length; counter2++)
        {
            newArray[i] = array[counter][counter2];
            i++;
        }
    }
    return newArray;
}

// function flatten2D(array)
// {
//     let flattened = [];
   
//     for (let item of array)
//     {
//         if (Array.isArray(item))
//         {
//             item = flatten(item);
//         }
//     }
// }