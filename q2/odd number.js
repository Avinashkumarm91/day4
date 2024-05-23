let arr = [1, 2, 3, 4, 5, 6, 7];
let odd = (arr) => { 
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            res.push(arr[i]);
        }
    }
    return res;
}
console.log(odd(arr));
