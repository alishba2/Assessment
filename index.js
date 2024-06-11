// Question no 1
// Write a function that will take an array as input, sort, and return the array in descending
// order. For example, if the array is [3,2,7,4,6,9] the result should be [9,7,6,4,3,2]


// solution


function sortArrayInDesc(arrNum) {

    let len = arrNum.length;

    // by using bubble sort

    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arrNum[j] < arrNum[j + 1]) {
                let temp = arrNum[j];
                arrNum[j] = arrNum[j + 1];
                arrNum[j + 1] = temp;
            }
        }

    }
    return arrNum;

}


let arr = [3, 2, 7, 4, 6, 9];
console.log("The array is descending order is: ", sortArrayInDesc(arr));



// Question no #02
// Write a function that will take a string as input, check and return if it is palindrome or
// not. For example, if the string is “madam” the function should return true and if the string
// is “doctor” it should return false. 


function isPalindrome(str) {

    let len = str.length;

    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
        else {
            return true;
        }
    }

}

let str = "madam";

if (isPalindrome(str) === true) {
    console.log(str, " is palindrome")
} else {
    console.log(str, " is not  palindrome")
}



// Question no 3
//  Write a function that will take an array as input and return the sum of the two largest
// numbers in a n array. For example, in the array [3,7,1,5,11,19] the result would be 30
// because 11 and 19 are the largest numbers.

function sumOfFristAndSecondLargestNumber(n) {
    let len = n.length;
    let first = 0;
    let second = 0;

    for (let i = 0; i < len; i++) {
        if (n[i] > first) {
            second = first;
            first = n[i];

        }
        else if (n[i] > second) {
            second = n[i];
        }

    }
    return first + second;
}

let arr2 = [3, 7, 1, 5, 11, 19];
console.log("Sum of first and second greatest are: ", sumOfFristAndSecondLargestNumber(arr2));



// Question no 4

// Write a function that will take an array as input and return an array with every missing
// element from 0 to the highest entry. For example, in an array [3,4,9,1,7,3,2,6] the highest
// entry is 9, and missing numbers are [0,5,8]

function missingElements(arr) {
    let max = 0;
    let missingElement = [];


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    for (let i = 0; i <= max; i++) {
        let found = false;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === i) {
                found = true;
                break;
            }
        }
        if (!found) {
            missingElement.push(i);
        }
    }

    return missingElement;
}



let arr4 = [3, 4, 9, 1, 7, 3, 2, 6];
console.log("Missing elements are : ", missingElements(arr4));


// Question no 5
// Write a function that will take an array of numbers and return the number most repeated
// in the array with how many times it was repeated. For example, if the array is
// [4,3,5,6,4,7,9,2,4,6,3,4,6,3,4,8,5,1,5] the function should return 4 is repeated 5 times. 

function findMostFrequent(arr) {

    const countMap = {};
    let maxCount = 0;
    let mostFrequentNum;


    for (let num of arr) {
        countMap[num] = (countMap[num] || 0) + 1;

        if (countMap[num] > maxCount) {
            maxCount = countMap[num];
            mostFrequentNum = num;
        }
    }


    return { number: mostFrequentNum, count: maxCount };
}

const data = [4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 4, 8, 5, 1, 5];
const result = findMostFrequent(data);
console.log(`${result.number} is repeated ${result.count} times.`);


// Question no 6
// : Write a function that will take an array as input, it will rotate the array to the right 1 time
// and return the rotated array.Rotation of the array means that each element is shhifted right
// by one index. For example, the rotation of array A = [3,8,9,7,6] is [6,3,8,9,7]

function rotateRight(n) {

    if (n.length <= 1) {
        return n;
    }

    let temp;

    for (let i = n.length - 1; i > 0; i--) {
        temp = n[i];
        n[i] = n[i - 1];
        n[i - 1] = temp;
    }

    return n;
}


const array = [3, 8, 9, 7, 6];
rotateRight(array);

console.log("Rotated array:", array);