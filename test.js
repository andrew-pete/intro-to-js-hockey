import { map, filter } from './modules/functions.js';

function testMap(testCases) {
    const mapFn = el => el**2;

    return testCases.reduce((numCorrect, testArr) => {
        const actual = map(testArr, mapFn);
        const expected = testArr.map(mapFn);

        console.log('actual', actual, `expected:`, expected);
        return numCorrect + (assertArrays(actual, expected) ? 1 : 0) 
    }, 0);
}

function testFilter(testCases) {
    // isOdd
    const filterFn = el => el % 2;

    return testCases.reduce((numCorrect, testArr) => {
        const actual = filter(testArr, filterFn);
        const expected = testArr.filter(filterFn);

        console.log('actual', actual, `expected:`, expected);
        return numCorrect + (assertArrays(actual, expected) ? 1 : 0) 
    }, 0);
}

function assertArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.reduce((acc, el) => acc && arr2.includes(el), true);
}

// Tests
(function(){
    const mapResults = document.body.querySelector("#map_test_results");
    const filterResults = document.body.querySelector("#filter_test_results");


    const cases = [[], [1,2,3], [1], [null]];

    const numCorrectMap = testMap(cases);
    const numCorrectFilter = testFilter(cases);

    let results = `Map: ${numCorrectMap} out of ${cases.length} correct`;
    if (numCorrectMap < cases.length) {
        results += '\n please see console for case-by-case outputs';
    }

    mapResults.innerText = results;

    results = `Filter: ${numCorrectFilter} out of ${cases.length} correct`;
    if (numCorrectFilter < cases.length) {
        results += '\n please see console for case-by-case outputs';
    }

    filterResults.innerText = results;

})();

