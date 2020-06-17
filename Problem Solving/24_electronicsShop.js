// даётся два массива со стоимостью клавиатур и флешек + есть бюджет, надо найти максимальную возможную комбинацию (по стоимости)
// и уложится в бюджет - если это невозможно - вывести "-1"

let keyboards = [3, 1],
    drives = [5, 2, 8],
    budget = 10,
    keyboards2 = [4],
    drives2 = [5],
    budget2 = 5;

function getMoneySpent(keyboards, drives, b) {
    let maxPrice = 0,
        result = 0,
        sum = 0;
    for (let i = 0; i < keyboards.length; i++) {
        for (const item of drives) {
            sum = keyboards[i] + item;
            maxPrice = sum <= b && sum > maxPrice ? sum : maxPrice;
        }
    }
    result = maxPrice === 0 ? -1 : maxPrice;
    return result;
}

console.log(getMoneySpent(keyboards, drives, budget));
console.log(getMoneySpent(keyboards2, drives2, budget2));
