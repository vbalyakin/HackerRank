// Dan is playing a video game in which his character competes in a hurdle race. 
// Hurdles are of varying heights, and Dan has a maximum height he can jump. 
// There is a magic potion he can take that will increase his maximum height by 1 unit for each dose. 
// How many doses of the potion must he take to be able to jump all of the hurdles.

let height1_str = '1 6 3 5 2',
    k1 = 4,
    height2_str = '2 5 4 5 2',
    k2 = 7,
    height1 = height1_str.replace(/\s+/g, ',').split(',').map(elem => +elem),
    height2 = height2_str.replace(/\s+/g, ',').split(',').map(elem => +elem);

function hurdleRace(k, height) {
    const max = height.sort((a, b) => a - b)[height.length - 1];
    let result = max < k ? 0 : Math.abs(k - max);
    return result;
}

console.log(hurdleRace(k1, height1));
