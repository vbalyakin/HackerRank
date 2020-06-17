const array = [10, 20, 20, 10, 10, 30, 50, 10, 20],
    array2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    array3 = [1, 1],
    n = array.length;

function sockMerchant(n, ar) {
    ar.sort((a, b) => a - b);
    console.log(ar);
    let counter = 0;
    for (let i = 0; i < ar.length; i ++) {
        for (let j = i + 1; j < ar.length; j++) {
            if (ar[i] === ar[j] && (ar[i] || ar[j]) !== 't') {
                ar[ar.indexOf(ar[i])] = 't';
                ar[ar.indexOf(ar[j])] = 't';
                counter++;
                console.log(ar);
            }
        }
    }
    return counter;
}

console.log(sockMerchant(n, array3));
