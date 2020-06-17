const marks = [73, 67, 38, 33, 29];

function gradingStudents(grades) {
    const result = [],
        divider = 5,
        edge = 5,
        lowerEdge = 38,
        comparator = 3;
    for (const item of grades) {
        let value = edge - (item % divider),
            newMark = item + value;
        if (item >= lowerEdge && value < comparator) {
            result.push(newMark);
        } else if (item >= lowerEdge && value === comparator) {
            result.push(item);
        } else if (item >= lowerEdge && value > comparator) {
            result.push(item);
        } else if (item < lowerEdge) {
            result.push(item);
        } 
    }
    return result;
}

console.log(gradingStudents(marks));
