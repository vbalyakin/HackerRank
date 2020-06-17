function kangaroo(x1, v1, x2, v2) {
    let result = ' ',
        counter = (x2-x1)/(v1-v2);
    result = (x2 >= x1) && (v2 > v1) ? 'NO' : result;
    result = Number.isInteger(counter) && counter > 0 ? 'YES' : 'NO';
    console.log(result);
    return result;
}

kangaroo(0, 3, 4, 2);
kangaroo(0, 2, 5, 3);
