// The positive lookahead (?=) asserts regex_1 to be immediately followed by regex_2. 
// The lookahead is excluded from the match. It does not return matches of regex_2. 
// The lookahead only asserts whether a match is possible or not.

// Task

// You have a test string S.
// Write a regex that can match all occurrences of o followed immediately by oo in S.

const Regex_Pattern = /o(?=oo)/g;
