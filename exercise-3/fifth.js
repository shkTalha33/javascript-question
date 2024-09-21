const replaceIntWithChar = (str) => {
    // return str.replace(/[0-9]/,'$')
    return str.replace(/\d/g,'$')
}

console.log(replaceIntWithChar("Thi7 i7 a car"));