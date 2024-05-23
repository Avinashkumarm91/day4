let a = [1, 2, 3, 4, 5, 6, 7, 8];
let prime = (num) => {
    for (let j = 2; j < num - 1; j++) {
        if (num % j === 0) {
            return false;
        }
    }
    return num>1;
}
console.log(a.filter(prime));
