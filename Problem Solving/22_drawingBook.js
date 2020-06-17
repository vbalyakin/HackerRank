// The first line contains an integer n, the number of pages in the book.
// The second line contains an integer p, the page that Brie's teacher wants her to turn to.
// у нас есть книга с количеством страниц и нужная страница, подсчитать, с начала или конца надо перевернуть
// меньшее количество строниц до нужной нам страницы и вернуть это число

function pageCount(n, p) {
    let fromEnd = 0,
        fromStart = 0,
        result = 0;
    fromEnd = (n % 2 === 0 && n - p >= 1) ? Math.round((n - p) / 2) : fromEnd;
    fromEnd = (n % 2 === 0 && n - p === 0) ? fromEnd : fromEnd;
    fromEnd = (n % 2 !== 0 && n - p > 1) ? Math.floor((n - p) / 2) : fromEnd;
    fromEnd = (n % 2 !== 0 && n - p === 1) ? fromEnd : fromEnd;
    fromStart = Math.round((p - 1) / 2);
    result = fromStart > fromEnd ? fromEnd : fromStart;
    // если чётное и разница больше 1 - отнимаем нужную страницу, делим на 2 и округляем по матем законам округления
    // если нечётное и разница больше 1 - отнимаем нужную страницу, делим на 2 и округляем в меньшую сторону
    // если нечётное и разница = 1 -> 0
    // если чётное и разница = 0 -> 0
    return result;
}

console.log(pageCount(5, 4));
