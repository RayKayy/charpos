function positionLetters(str) {
 function positionChar(char, word) {
   var posLst = [];
   for (var i = 0; i < word.length; i++) {
     if (char == word[i]) posLst.push(i);
   }
   return posLst;
 }
 var list = {};
 for (var letter of str) {
   list[letter] = positionChar(letter, str);
 }
 return list;
}

console.log(positionLetters("lighthouse in the house"));