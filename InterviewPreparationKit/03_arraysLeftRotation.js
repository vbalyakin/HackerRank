const aa = [1, 2, 3, 4, 5],
    d = 2;

function rotLeft(a, d) {
    const arr1 = a.slice(0,d),
        arr2 = a.slice(d, a.length);
    return arr2.concat(arr1);
}

console.log(rotLeft(aa,d));
