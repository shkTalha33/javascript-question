const  largestEvenValue = (arr) => {
    return Math.max(...arr.filter(el => el % 2 === 0))
}

console.log(largestEvenValue([20,75,38,97,111]));