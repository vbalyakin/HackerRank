// Task

// Given a test string, s , write a RegEx that matches s under the following conditions:

// s must start with Mr., Mrs., Ms., Dr. or Er..
// The rest of the string must contain only one or more English alphabetic letters (upper and lowercase).

const Regex_Pattern = /^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)[a-z|A-Z]+$/;
