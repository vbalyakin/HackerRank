let number = 5;

function staircase(n) {
    let space = ' ',
        diez = '#';
    for (let i = 1; i <= n; i++) {
        let count = n - i,
            diezCount = i;
        console.log(space.repeat(count) + diez.repeat(diezCount));
    }
}

staircase(number);
