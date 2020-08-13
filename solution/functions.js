function map(array, mappingFn) {
    // initialize an empty array that we'll add to
    const mapped = [];
    // loop through each element of the passed in array
    for (let i = 0; i < array.length; i++) {
        // grab the element at index `i`
        const element = array[i];
        // push the result of perform mappingFn on element to our mapped array
        mapped.push(mappingFn(element));
    }
    // return the mapped array at the end
    return mapped;
}


function filter(array, filterFn) {
    // initialize an empty array that we'll add to
    const filtered = [];
    // loop through every element
    for (let i = 0; i < array.length; i++) {
        // grab the element at index `i`
        const element = array[i];
        // NOW, check that the result of filterFn called on the element is `true`
        // Remember: it's not your job to enforce what the filter function is. It's the consumer
        // of this function to make sure they are passing in a function that returns a boolean
        if (filterFn(element)) {
            // If the condition is satisfied, push to our filtered array
            filtered.push(element);
        }
    }
    // return the filtered array
    return filtered;
}