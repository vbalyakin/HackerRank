// The Utopian Tree goes through 2 cycles of growth every year.
// Each spring, it doubles in height.Each summer, its height increases by 1 meter.
// Laura plants a Utopian Tree sapling with a height of 1 meter at the onset of spring.
// How tall will her tree be after n growth cycles ?

// Input Format
// An integer, n , denoting the number of cycles for that test case.

let n = 3;

function utopianTree(n) {
    let h = 1,
        res = n % 2,
        counter = function (n) {
            let steps = n / 2;
            for (let i = 1; i <= steps; i++) {
                h = h * 2 + 1;
            }
        };
    if (!n) {
        return h;
    } else if (res === 0) {
        counter(n);
    } else if (res !== 0) {
        counter(n);
        h = h*2;
    }
    return h;
}

console.log(utopianTree(n));
