let h1 = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    word = 'abc';

function designerPdfViewer(h, word) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        values = [],
        wordArray = word.toLowerCase().split('');
    for (const char of wordArray) {
        let value = alphabet.indexOf(char);
        values.push(h[value]);
    }
    values.sort((a, b) => a - b);
    return values[values.length - 1] * values.length;
}

console.log(designerPdfViewer(h1, word));