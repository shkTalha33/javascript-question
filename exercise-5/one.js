const convertInAlphabaticOrder = (str) => {
    return str.split('').sort((a, b) => a.localeCompare(b)).join('')
}

console.log(convertInAlphabaticOrder('webmaster'));
console.log(convertInAlphabaticOrder('webma7ter'));