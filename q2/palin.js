let arr = [ 'hello','avi','eye','noon'];
let palin = (str) => {
    revstr = str.split('').reverse().join('');
    if (str == revstr) {
        return str;
    }else{
        return false;
    }
}
console.log(arr.filter(palin));
