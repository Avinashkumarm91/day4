//anonymous function
b = function(str) {
var sentence = str.toLowerCase().split(" ");
for (let i = 0; i < sentence.length; i++) {
sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
}
console.log(sentence.join(" "));
return sentence;
}
b("all is well");

//IIFE
(function(str) {
var sentence = str.toLowerCase().split(" ");
for (let i = 0; i < sentence.length; i++) {
sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
}
console.log(sentence.join(" "));
return sentence;
})("all is well");
