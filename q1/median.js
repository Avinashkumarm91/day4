let arr1 = [45, 56, 23, 78, 89, 57, 70];
let arr2 = [23, 56, 78, 90, 80, 32, 67];
let med = function(arr1, arr2) {
    let l = arr1.length;
    arr1.sort(function(a, b) { return a-b });
    arr2.sort(function(a, b) { return a-b });
    console.log(arr1, arr2);
    if (arr1.length % 2 === 0) {
        console.log((arr1[l / 2] + arr1[l / '2-1']) / 2);
        console.log((arr2[l / 2] + arr2[l / '2-1']) / 2);
    }
    else{
        console.log(arr1[(l-1) / 2])
        console.log(arr2[(l-1) / 2])
    }
};
med(arr1,arr2);

// IIFE

(function(arr1, arr2) {
    let l = arr1.length;
    arr1.sort(function(a, b) { return a - b });
    arr2.sort(function(a, b) { return a - b });
    console.log(arr1, arr2);
    if (arr1.length % 2 === 0) {
        console.log((arr1[l / 2] + arr1[l / 2-1]) / 2);
        console.log((arr2[l / 2] + arr2[l / 2-1]) / 2);
    }
    else{
        console.log(arr1[(l-1)/2]);
        console.log(arr2[(l-1)/2]);
    }
    })(arr1,arr2);