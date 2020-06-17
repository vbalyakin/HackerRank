// даётся год от 1700 до 2700 - узнать, в какой точно день, в зависимости от года, будет День программиста - 256-й день в году

function dayOfProgrammer(year) {
    const borderlineValue = 1918;
    let result = `13.09.${year}`;
    if ((year > borderlineValue && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))) || (year < borderlineValue && year % 4 === 0) ) {
        result = `12.09.${year}`;
    } else if (year === borderlineValue) {
        result = `26.09.${year}`;
    }
    return result;
}

console.log(dayOfProgrammer(2017));
