let ourString = 'We promptly judged antique ivory buckles for the next prize   ';
// let ourString = 'We promptly judged antique ivory buckles for the prize  ';

function pangrams(s) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        expectedResult = alphabet.length,
        patternArray = s.toLowerCase().split('');
    let counter = 0,
        result = '';
    for (const character of alphabet) {
        counter = patternArray.includes(character) ? ++counter : counter;
    }
    console.log(counter);
    result = counter === expectedResult ? 'pangram' : 'not pangram';
    return result;
}

console.log(pangrams(ourString));
