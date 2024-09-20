const closetValueTo100 = (a, b) => {
    return a - 100 > b - 100 ? `${a} is greater and closet to 100` :  `${b} is greater and closet to 100`
    
    // if (a - 100 > b - 100 ) {
    //     return `${a} is greater and closet to 100`
    // } else {
    //     return `${b} is greater and closet to 100`
    // }

}

console.log(closetValueTo100(130,75));
console.log(closetValueTo100(60,20));