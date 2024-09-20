const newString = (str) => {
        return str.length >= 3 ? str.slice(0,3) + str.slice(-3) : str;
    
}

console.log(newString("abcde"));
console.log(newString("abcdeghwy123"));
console.log(newString("de"));