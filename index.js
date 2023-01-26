// Exercise 1: Random Number

function randomEven() {
    let rand = Math.floor(Math.random()* 101);
    console.log(`The Random Number: ${rand}`);
    for (let i = 0; i < rand+1; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

randomEven();


// Exercise 2: Capitalized Letters

function capitalize(str) {
    let array1 = str.split("");
    let array2 = str.split("");
    for (let i = 0; i < array1.length; i+=2) {
        array1[i] = array1[i].toUpperCase();
        array2[i+1] = array2[i+1].toUpperCase();
    }
    return [array1.join(""), array2.join("")];
}

console.log(capitalize("abcdef"));



// Exercise 3 : Is Palindrome?

function is_palindrome(str) {
    let arr = str.split("");
    let arr1 = str.split("")
    arr1.reverse();
    console.log(arr);
    console.log(arr1);
    for (let i in arr) {
        if (arr[i] != arr1[i]) {
            return false;
        }
    }
    return true;
}
console.log(is_palindrome("madam"));



// Exercise 4 : Biggest Number

function biggestNumberInArray(array) {
    if (array.length == 0) {
        return 0;
    }
    let big = Number(array.shift());
    while (isNaN(big)) {
        big = Number(array.shift());
    }
    while (array.length > 0) {
        if (array[0] > big) {
            big = Number(array.shift());
        } else {
            array.shift();
        }
    }
    return big;
}

console.log(biggestNumberInArray([-1,0,3,'a',100, 99, 2, 99]))
console.log(biggestNumberInArray(['a', 3, 4, 2]))
console.log(biggestNumberInArray([]))



// Exercise 5: Unique Elements

function snowflake(array) {
    let array2 = [];
    while (array.length > 0) {
        console.log(array[0])
        if (array[0] != array2[array2.length-1]) {
            console.log("in")
            console.log(array2.indexOf(array[0]))
            array2.push(array.splice(array.indexOf(array[0]), 1));
            console.log("array1: "+array.toString())
            console.log("array2: "+array2.toString())
        } else {
            console.log("out")
            array.splice(array.indexOf(array[0]), 1);
        }
    }
    return array2;
}

console.log(snowflake([1,2,3,3,3,3,4,5]));