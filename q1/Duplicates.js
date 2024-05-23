let arr = [1, 2, 2, 2,3, 4, 6, 6, 6, 7, 7, 8, 8,];
let dup = function(arr) {
    let newarr = [...new Set(arr)];
    console.log(newarr);
}
dup(arr);

//iife

(function(arr) {
    let newarr = [...new Set(arr)];
    console.log(newarr);
})(arr)
    