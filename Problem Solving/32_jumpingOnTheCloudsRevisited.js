// Input Format
// The first line contains two space-separated integers, N and K, the number of clouds and the jump distance.
// The second line contains N space-separated integers C[i] where 0 <= i < N. Each cloud is described as follows:
// If C[i] = 0, then cloud 'i' is a cumulus cloud.
// If C[i] = 1, then cloud 'i' is a thunderhead.

// Output Format
// Print the final value of 'E' on a new line.

// jumpingOnClouds has the following parameter(s):

// c: an array of integers representing cloud types
// k: an integer representing the length of one jump

let c = [0, 0, 1, 0, 0, 1, 1, 0],
    c1 = [1, 1, 1, 0, 1, 1, 0, 0, 0, 0],
    k = 2,
    k1 = 3;

function jumpingOnClouds(c, k) {
    let energy = 100,
        copyOfC = c.slice();
    if (c.length % k === 0) {
        c = c.concat(c[0]);
    } else {
        for (let i = 1; i < k; i++) {
            c = c.concat(copyOfC);
        }
        c = c.concat(c[0]);
    }
    for (let i = k; i <= c.length; i += k) {
        energy = c[i] === 0 ? energy - 1 : c[i] === 1 ? energy - 3 : energy;
    }
    return energy;
}

console.log(jumpingOnClouds(c, k));
console.log(jumpingOnClouds(c1, k1));