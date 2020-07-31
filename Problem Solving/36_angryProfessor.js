// k - minimum quantity of students for start lesson
// array - students time (<=0 - student income before lesson, >0 - student income after lesson)
// if quantity of '<=0' students >= k -> lesson don't cancel (print 'NO')
// else print 'YES' - lesson has been cancel

let k = 4,
    array = [-1, -3, 4, 2];

function angryProfessor(k, a) {
    let counter = 0,
        result = 'NO';
    for (const item of a) {
        counter = item <= 0 ? ++counter : counter;
    }
    result = counter >= k ? result : 'YES';
    return result;
}

console.log(angryProfessor(k, array));
