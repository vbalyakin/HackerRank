const ar = [1000000000, 3450000000, 890002344, 4, 91234142414134, 9007199254740992];

function aVeryBigSum(ar) {
    // let sum = 0n;
    let result = ar.reduce((sum, current) => sum + current, 0) + 'n'; // либо без " + 'n' "
    // let total = result > (2**53-1) ? sum+= result : result;
    console.log(total);
    console.log(typeof Number(total));
}

aVeryBigSum(ar);