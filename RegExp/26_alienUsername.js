// In a galaxy far, far away, on a planet different from ours, each computer username uses the following format:

//     It must begin with either an underscore, _(ASCII value 95), or a period, .(ASCII value 46).
// The first character must be immediately followed by one or more digits in the range 0 through 9.
// After some number of digits, there must be 0 or more English letters(uppercase and / or lowercase).
// It may be terminated with an optional _(ASCII value 95).Note that
// if it 's not terminated with an underscore, then there should be no characters after the sequence of 0 or more English letters.
// Given strings, determine which ones are valid alien usernames.If a string is a valid alien username, print VALID on a new line;
// otherwise, print INVALID.In a galaxy far, far away, on a planet different from ours, each computer username uses the following format:

//     It must begin with either an underscore, _(ASCII value), or a period, .(ASCII value).
// The first character must be immediately followed by one or more digits in the range through.
// After some number of digits, there must be or more English letters(uppercase and / or lowercase).
// It may be terminated with an optional _(ASCII value).Note that
// if it 's not terminated with an underscore, then there should be no characters after the sequence of  or more English letters.
// Given n strings, determine which ones are valid alien usernames.If a string is a valid alien username, print VALID on a new line;
// otherwise, print INVALID.

let input = '3\n_0898989811abced_\n_abce\n_09090909abcD0';

function processData(input) {
    const values = input.split('\n');
    values.shift();
    for (const username of values) {
        if (username.match(/^[_\.][0-9]+[a-z]*_?$/ig)) {
            console.log('VALID');
        } else {
            console.log('INVALID');
        }
    }
}

processData(input);
