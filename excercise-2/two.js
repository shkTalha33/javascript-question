const extractFirstHalfOString = (str) => {
    return str.length % 2 === 0 ? str.slice(0,str.length/2) : "Odd String!!!"
}


console.log(extractFirstHalfOString("tisone furry"));
console.log(extractFirstHalfOString("tis"));
console.log(extractFirstHalfOString("four"));