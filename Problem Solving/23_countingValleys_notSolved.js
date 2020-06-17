// The first line contains an integer n, the number of steps in Gary's hike.
// The second line contains a single string s, of n characters that describe his path.
const n = 8,
    s = 'UDDDUDUU';


function countingValleys(n, s) {
    let array = s.split(''),
        level = array[0] === 'U' ? 'up' : 'down';
    
}

console.log(countingValleys(n,s));