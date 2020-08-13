function map(array, mappingFn) {
    const mapped = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        mapped.push(mappingFn(element));
    }
    return mapped;
}


function filter(array, filterFn) {
    const filtered = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (filterFn(element, i)) {
            filtered.push(element);
        }
    }
    return filtered;
}