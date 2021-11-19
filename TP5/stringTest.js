function absTest()
{
    let numbers = [-42, 3, 0, -1, 100];
    let absNumbers = absoluteValue(numbers);
    console.log(absNumbers); // => [42, 3, 0, 1, 100]
    console.log(numbers); // => [-42, 3, 0, -1, 100]
}

function evenOnlyTest()
{
    console.log( even([0,1,2,3,4]) ); // => [0, 2, 4]
}

function sumTest()
{
    console.log( sum([7, 90, 70, 42, 5])); // => 214
}

function flatten2DTest ()
{
    console.log( flatten2D([[1,2], [3,4], [5,6]])); // [1, 2, 3, 4, 5, 6]
    console.log( flatten2D([[1,2], [3,4,5], [6]])); // [1, 2, 3, 4, 5, 6]
}

function removeDuplicatesTest()
{
    console.log( removeDuplicates([]) ); // => []
    console.log( removeDuplicates([1,2,3,4]) ); // => [1,2,3,4]
    console.log( removeDuplicates([1,2,3,2,4,3,1,1]) ); // => [1,2,3,4]
}