// даны координаты котов на одной линии с мышью - коты X, Y, мышь - Z
// определить, какой из котов ближе к мыши и вывести результат, если коты на одинаковом расстоянии - вывести результат "Мышь", т.к. коты
// будут драться за мышь и ей удастся сбежать

let x = 1,
    y = 2,
    z = 3,
    x1 = 1,
    y1 = 3,
    z1 = 2;

function catAndMouse(x, y, z) {
    let result = Math.abs(z - x) === Math.abs(z - y) ? 'Mouse C' : Math.abs(z - x) < Math.abs(z - y) ? 'Cat A' : 'Cat B';
    return result;
}

console.log(catAndMouse(x, y, z));
console.log(catAndMouse(x1, y1, z1));