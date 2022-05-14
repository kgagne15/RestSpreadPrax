// Refactor following code using rest operator and an arrow function

// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds = (...nums) => {
    
    return nums.filter((num) => {
        return num % 2 === 0
    }); 
}

//Write a function called findMin that accepts a variable number of 
//arguments and returns the smallest argument

const findMin = (...nums) => {
    return nums.reduce((acc, next) => {
        if (next < acc) {
            return next; 
        }
        return acc; 
    })
}

//write a function called mergeObjects that accepts two objects and returns
//a new object which contains all the keys and values of the first and second object

function mergeObjects(obj1, obj2) {
    const newObj = {...obj1, ...obj2};
    return newObj;
}

//write a function called doubleAndReturnArgs which accepts an array and a
//a variable number of arguments. The function should return a new array with
//the original array values and all of the additional arguments doubled

function doubleAndReturnArgs(arr, ...vals){
    const newArr3 = []; 
    for (let x of arr) {
        newArr3.push(x);
    }
    vals.forEach(function(v) {
        newArr3.push(v * 2)
    })
    return newArr3;  
}

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    let randomIdx = Math.floor(Math.random() * items.length);
    console.log(randomIdx); 
    items.splice(randomIdx, 1);
    newArr = [...items];
    return newArr; 
}


/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
    let newArr = [...array1, ...array2];
    return newArr; 
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    const newObj = {...obj};
    newObj[key] = val; 
    return newObj; 
}


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    const newObj = {...obj1, ...obj2};
    return newObj; 
}


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    const newObj = {...obj};
    newObj[key] = val; 
    return newObj; 
}