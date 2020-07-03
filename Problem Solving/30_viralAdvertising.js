const n = 5,
    n2 = 3;


function viralAdvertising(n) {
    let shared = 5,
        multiplier = 3,
        divider = 2,
        cumulative = 0,
        liked = 0;
    for (let i = 1; i <= n; i++) {
        liked = Math.floor(shared / divider);
        cumulative = cumulative + liked;
        shared = Math.floor(shared / divider) * multiplier;
    }
    return cumulative;
}

console.log(viralAdvertising(n));
