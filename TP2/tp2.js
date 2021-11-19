function celciusToFahrenheit(celcius) {
    return ( celcius * 1.8 ) + 32;
}

function limit(x, inf, sup) {
    if (x<=inf)
    {
        return inf;
    }
    if (x>=sup)
    {
        return sup;
    }
    else 
    {
        return x;
    }
}

function isPerfect (n) {
    let total = 0;
    for (let compteur = 1; compteur < n; compteur++)
    {
        if (0 === n%compteur)
        {
            total = compteur + total;
        }
    }
    if (total === n)
    {
        return true;
    }
    else 
    {
        return false;
    }
}

function nbDigits(n) {
    let k = 0;
    if (n < 0) {
        while (n < -1) {
            n = n/10;
            k++;
        }
    return k;
    }
    if (n === 0) {
        return 1;
    }
    if (n > 0) {
        while (n > 1) {
            n = n/10;
            k++;
        }
    return k;
    }
}

function isNarcissistic(n) {
    let nombre = nbDigits(n);
    if (nombre === 1)
    {
        return true;
    }
    else
    {
        let m = n;
        let sum = 0;
        let k = 0;
        for (let counter = 0; counter < nombre ; counter++)
        {
            while (m > 10 ** counter)
            {
                m = m / 10;
            }
            m = 10*m;
            m = Math.trunc(m);
            m = m - k;
            sum = sum + m ** nombre;
            k = 10 * k;
            k = k + m * 10;
            m = n;
        }
        if (sum === n)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

function threeDigitsNarcissistic (n)
{
    for (let counter = 100; counter < 1000; counter++)
    {
        if (isNarcissistic(n)===true)
        {
            console.log(counter);
        }
    }
}

function mDigitsNarcissistic (n, m)
{
    for (let counter = 10 ** m-1; counter < 10 ** m; counter++)
    {
        if (isNarcissistic(n)===true)
        {
            console.log(counter);
        }
    }
}

function main() {

    let result = celciusToFahrenheit(22);
    console.log(result);

    console.log(limit(4, 3, 8));
    console.log(limit(1, 3, 8));
    console.log(limit(42, 3, 8));

    console.log(isPerfect(6));
    console.log(isPerfect(496));
    console.log(isPerfect(42));
    console.log(isPerfect(1337));

    console.log(nbDigits(0));
    console.log(nbDigits(42));
    console.log(nbDigits(1337));

    console.log(isNarcissistic(153));
    console.log(isNarcissistic(370));
}

main();