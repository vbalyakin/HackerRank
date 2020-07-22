// Increasing popularity of hackerrank can be seen in tweets like
// I love #hackerrank
// I just scored 27 points in the Picking Cards challenge on #HackerRank
// I just signed up for summer cup @hackerrank
// Given a set of most popular tweets, your task is to find out how many of those tweets has the string hackerrank in it.

// Input Format
// First line is an integer N. N lines follow. Each line is a valid tweet.Increasing popularity of hackerrank can be seen in tweets like
// I love #hackerrank
// I just scored 27 points in the Picking Cards challenge on #HackerRank
// I just signed up for summer cup @hackerrank
// Given a set of most popular tweets, your task is to find out how many of those tweets has the string hackerrank in it.

// Input Format
// First line is an integer N. N lines follow. Each line is a valid tweet.

function processData(input) {
    console.log(input.match(/[#|@]*hackerrank/ig).length);
} 