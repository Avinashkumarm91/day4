let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

b = function(...a) {
for (let i = 0; i < a.length; i++) {
for (let j = 2; j <= a[i]-1; j++) {
if (a[i] % j == 0) {
return false;
}
}
return a[i] > 1;
}
};
console.log(a.filter(b));

// IIFE 

(prime = function(a) {

    for (let j = 2; j <= a - 1; j++) {
    
    if (a % j == 0) {
    
    return false;
    
    }

    }
    
    return a > 1
    
    })();
    
    console.log(a.filter(prime))