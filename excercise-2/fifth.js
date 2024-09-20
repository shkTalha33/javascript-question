const check2To4Occurence = (str, char) => {
    return str.split("").filter(el => el === char).length
}

const isOccurenceSatisfied = (str, char) => {
    return check2To4Occurence(str, char) >= 2 && check2To4Occurence(str, char) <= 4 
}

console.log(isOccurenceSatisfied("yahooo","o"));
console.log(isOccurenceSatisfied("yahoooo","o"));
console.log(isOccurenceSatisfied("yahooooooo","o"));
