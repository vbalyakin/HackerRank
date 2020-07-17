// Task

// You have a test string S.
// Your task is to write a regular expression that matches only and exactly strings of form:
// abc.def.ghi.jkl, 
// where each variable 
// a, b, c, d, e, f, g, h, k, l 
// can be any single character except the newline.

let Regex_Pattern_1 = /^(.{3}\.{1}){3}.{3}\.{1}.{3}\.{1}.{3}$/g;
let Regex_Pattern_2 = /^(.{3}\.{1}){3}.{3}$/g;

