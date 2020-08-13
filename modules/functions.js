
// This one is already filled out for you
export function forEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        fn(element, i);
    }
}

// TO SEE TEST RESULTS, GO TO localhost:8000/test.html after you've started your server

/**
 * @param {any[]} array 
 * @param {Function} mappingFn 
 */
export function map(array, mappingFn) {
    // TODO: map each element in `array` to mappingFn(element)
    return [];
}


/** Challenge */

/**
 * Returns new array for elements of array whereby `filterFn(element) === true`
 * 
 * e.g. `filter([1,2,3], el => el > 2) returns [3]`
 * @param {any[]} array 
 * @param {Function} filterFn 
 */
export function filter(array, filterFn) {
    // TODO: only return the subset of elements that satisfy filterFn(element) === true
    return [];
}