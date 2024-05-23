x=[1,2,3,4];
y= function(){
    let sum=0;
    for(i=0;i<x.length;i++){
        sum=sum+x[i];
    }
    return sum;
}
console.log(y());

//IIFE
(function(){
    let sum=0;
    for(let i=0;i<x.length;i++){
        sum=sum+x[i];
    }
    console.log(sum);

})();
