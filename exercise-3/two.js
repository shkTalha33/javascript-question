const countIntegers = (arr) => {
    return arr.filter(el => el % 2 === 0).length
}

const evenValueToGivenNumber = (val) => {
    const arr = [];
    for (let i = 0; i <= val; i++) {
            arr.push(i)        
    }

    return countIntegers(arr)

}

console.log(evenValueToGivenNumber(10));
console.log(evenValueToGivenNumber(100));