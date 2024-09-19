const moveCharCodeOnNext = (arr) => {
    const newStr = arr.split("").map(val => String.fromCharCode(val.charCodeAt(0) + 1)).join('')
    return newStr;
}

console.log(moveCharCodeOnNext("ab/3"));
