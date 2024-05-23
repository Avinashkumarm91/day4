let arr=['noon','spain','eye','pop'];
let palin=function(arr){
    let c=[];
    for(let i=0;i<arr.length;i++){
        let strarr=arr[i]
        let revstr=strarr.split('').reverse('').join('');
        if(strarr==revstr){
            c.push(strarr);
        }
    }
    console.log(c);
}
palin(arr);

//IIFE

let c=[];
for(let i=0;i<arr.length;i++){
    let strarr=arr[i]
    let revstr=strarr.split('').reverse('').join('');
    if(strarr==revstr){
        c.push(strarr);
    }
}
console.log(c);
(arr);