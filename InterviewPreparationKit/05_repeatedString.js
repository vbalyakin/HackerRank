// s: a string to repeat
// n: the number of characters to consider

let str = 'aba', // 7
    n = 10,
    str2 = 'a', // 1000000000000
    n2 = 1000000000000, 
    str3 = 'bcbccacaacbbacabcabccacbccbababbbbabcccbbcbcaccababccbcbcaabbbaabbcaabbbbbbabcbcbbcaccbccaabacbbacbc', // 162401559918
    n3 = 649606239668,
    str4 = 'ceebbcb', // 0
    n4 = 817723,
    str5 = 'epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq', // 16481469408
    n5 = 549382313570,
    str6 = 'ababa', // 2
    n6 = 3;

function repeatedString(s, n) {
    let counterArray = s.match(/a/g);
    if (Object.is(counterArray, null)) { // если совпадений изначально нет
        return 0;
    } else if (counterArray.length === s.length) { // если количество совпадений равно длине строки
        return n;
    } else if (n < s.length) { // если длина итоговой строки меньше, чем длина изначальной строки для поиска
        let results = '',
            newStr = s.split('');
        for (let i = s.length - n; i > 0; i--) {
            newStr.pop();
        }
        results = newStr.join('').match(/a/g);
        return results.length;
    } else { // другие варианты
        let multiplier = Math.floor(n / s.length),
            counter = counterArray.length,
            numberOfCon = counter * multiplier,
            res = '',
            results = '',
            remainder = n - s.length * multiplier,
            newStr = s.split('');
        //console.log(remainder, newStr.length);
        for (let i = remainder; i >= 0; i--) {
            newStr.pop();
        }
        results = newStr.join('').match(/a/g);
        if (Object.is(results, null)) {
            res = 0;
        } else {
            res = results.length;
        }
        return numberOfCon + res;
    }
}

console.log(repeatedString(str, n));
console.log(repeatedString(str2, n2));
console.log(repeatedString(str3, n3)); // неверный результат
console.log(repeatedString(str4, n4));
console.log(repeatedString(str5, n5)); // неверный результат
console.log(repeatedString(str6, n6));
