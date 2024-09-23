const countVowels = (str) => {
    const newStr = str.toLowerCase()
    // return newStr.split('').filter(el => vowels.includes(el)).length
    return newStr.split('').filter(el => vowels.indexOf(el) > -1).length
}

const vowels = ['i','o','u','e','a']

console.log(countVowels('Talha is Here'));
console.log(countVowels('AliHammad is Here'));
console.log(countVowels('ZainQureshi is Here'));