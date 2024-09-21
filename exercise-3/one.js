const evenDigits = (arr) => {
    return arr.filter(val => val % 2 === 0).length
}

console.log(evenDigits([1,2,3,4,5,6]));
console.log(evenDigits([10,21,33,45,56,67]));