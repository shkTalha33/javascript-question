const nonRepeatedCharacter = (str) => {
    return str.split('').filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el))
}

console.log(nonRepeatedCharacter('abacddee'));
console.log(nonRepeatedCharacter('abbbbbbd'));
console.log(nonRepeatedCharacter('aabbfcddee'));
