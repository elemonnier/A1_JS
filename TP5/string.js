function absoluteValue(numbers)
{
    let tableau_abs = numbers.map( function(pepe) {
        if (pepe < 0)
        {
            return pepe * (-1);
        }
        else
        {
            return pepe;
        }
    } );

    return tableau_abs;
}

function even(numbers)
{
    let arrayEven = numbers.filter( function(number) {
            return number%2 == 0;
        }
    );

    return arrayEven;
}

function sum(numbers)
{
    let arraySum = numbers.reduce( function(number, acc) {
            return number + acc;
        },0
        );

    return arraySum;
}

function flatten2D(array)
{
    let s = [];
    array.forEach(function(i){
        i.forEach(function(j){
            s.push(j);
        })
    })
    return s;
}

function removeDuplicates(array){
	return array.reduce(function(acc, number){
		if (acc.indexOf(number) == -1){
			acc.push(number);
			return acc;
		}
		else return acc;
	}, []);
}