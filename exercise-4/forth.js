// const generateHexColorCode = () => {
//     const str = '0123456789abcdef'
//     let color = `#`
//     for (let i = 0; i <6; i++) {
//         const code = Math.floor(Math.random() * 16);
//         color += str[code]
        
//     }
//     return color;
// }

// console.log(generateHexColorCode());
// console.log(generateHexColorCode());
// console.log(generateHexColorCode());
// console.log(generateHexColorCode());

const hexCode = () => {
    return Math.floor(Math.random() * 16).toString(16)
}

const generateHexCode = () => {
    return '#' + Array.from({length:6}).map(hexCode).join('')
}

console.log(generateHexCode());