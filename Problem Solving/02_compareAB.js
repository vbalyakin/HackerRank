let a = [5, 7, 7, 10];
let b = [3, 7, 8, 9];

function compareTriplets(a, b) {
    const c = [];
    let valueA = 0;
    let valueB = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            valueA++;
        } else if (a[i] < b[i]){
            valueB++;
        }
    }
    c.push(valueA);
    c.push(valueB);
    console.log(c);
}

compareTriplets(a,b);