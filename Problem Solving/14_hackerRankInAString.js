// даётся строка, нужно выяснить, есть ли в строке последовательность символов (т.е. один за одним, пускай даже через два или три символа),
// которые в результате могут дать слово 'hackerrank'

// let dataString = 'hhaacckkekraraannk'; // YES
// let dataString = 'rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt'; // NO
// let dataString = 'hereiamstackerrank'; // YES 
let dataString = 'hackerworld'; // NO

function hackerrankInString(s) {
    const ourData = 'hackerrank',
        patternArray = ourData.split(''), // ['h', 'a', 'c', 'k', 'e', 'r', 'r', 'a', 'n', 'k']
        finishedArray = [];
    let wordInArray = s.toLowerCase().split(''),
        startPoint = 0,
        result = ' ';
    // console.log(patternArray);
    // console.log(wordInArray); // [ 'h', 'h', 'a', 'a', 'c', 'c', 'k', 'k', 'e', 'k', 'r', 'a', 'r', 'a', 'a', 'n', 'n', 'k']
    for (let i = 0; i < patternArray.length; i++) {
        for (let j = startPoint; j < wordInArray.length; j++) {
            if (wordInArray[j] === patternArray[i]) {
                startPoint = j + 1;
                finishedArray.push(wordInArray[j]);
                break;
            }
        }
    }
    result = finishedArray.join('') === ourData ? 'YES' : 'NO';
    // console.log(finishedArray.join(''));
    // console.log(result);
    return result;
}

hackerrankInString(dataString);
