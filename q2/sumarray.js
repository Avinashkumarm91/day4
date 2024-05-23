let arr=[1,2,3,4,5];
let sum= (a) => {
    let s=0;
    for(let i=0;i<a.length;i++){
        s=s+a[i];

    }
return s;
}
console.log(sum(arr));