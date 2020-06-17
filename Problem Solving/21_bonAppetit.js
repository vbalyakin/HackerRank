// bill: an array of integers representing the cost of each item ordered
// k: an integer representing the zero-based index of the item Anna doesn't eat
// b: the amount of money that Anna contributed to the bill

const array = [1, 2, 3, 4];
//console.log(array.reduce((item, sum) => item + sum, 0));
const bill = [3, 10, 2, 9];
let k = 1,
    b = 7;

function bonAppetit(bill, k, b) {
    let total = (bill.reduce((item, sum) => item + sum, 0) - bill[k]) / 2,
        value = b - total,
        result = value > 0 ? value : 'Bon Appetit';
    console.log(result);
}

bonAppetit(bill, k, b);