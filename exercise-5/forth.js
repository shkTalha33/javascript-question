const uniqueCharacters = (str) => {
    // return [...new Set(str)]
    return str.split('').filter((el, i , arr) => arr.slice(i + 1).indexOf(el) === -1 )
}                                                

console.log(uniqueCharacters('abcccdde'));