let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
b = function() {

let c = [];

for (let i = 0; i < a.length; i++) {

if (a[i] % 2 != 0) {

c.push(a[i]);

}

}

console.log(c);

};

b();

//IIFE Function

(function() {

let c = [];

for (let i = 0; i < a.length; i++) {

if (a[i] % 2 != 0) {

c.push(a[i]);

}

}

console.log(c);

})();