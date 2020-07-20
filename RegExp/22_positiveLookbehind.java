// The positive lookbehind (?<=) asserts regex_1 
// to be immediately preceded by regex_2. 
// Lookbehind is excluded from the match (do not consume matches of regex_2),
// but only assert whether a match is possible or not.

// Task

// You have a test String S.
// Write a regex which can match all the occurences of digit which are immediately preceded by odd dig

// JavaScript do not support lookbehind.

// YOU CAN UNCOMMENT ALL

// public class Solution {
//     public static void main(String[] args) {
//         Regex_Test tester = new Regex_Test();
//         tester.checker("(?<=[13579])\\d"); // Use '\\' instead of '\'.
//     }
// }

// class Regex_Test {
//     public void checker(String Regex_Pattern){
//         Scanner Input = new Scanner(System.in);
//         String Test_String = Input.nextLine();
//         Pattern p = Pattern.compile(Regex_Pattern);
//         Matcher m = p.matcher(Test_String);
//         int Count = 0;
//         while(m.find()){
//             Count += 1;
//         }
//         System.out.format("Number of matches : %d",Count);
//     }   
// }
