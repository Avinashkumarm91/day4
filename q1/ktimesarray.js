let arr = [1, 2, 3, 4, 5];
let k=2;
let rot=function(arr){
    for(let i=0;i<k;i++){
        arr.unshift(arr.pop());
    }
    console.log(arr);
}
rot(arr);
arr=[1,2,3,4,5];

//iife
(function(arr) {
    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr);
})(arr);
