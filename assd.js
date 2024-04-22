function filterDuplicates(data) {
    let uniqueValues = new Set();
    let result = [];

    for (let item of data) {
        if (!uniqueValues.has(item)) {
            uniqueValues.add(item);
            result.push(item);
        }
    }

    return result;
}

// Example usage:
const data = [7, 6, 4, 3, 3, 4, 9];
console.log(filterDuplicates(data)); // Output: [7, 6, 4, 3, 9]
