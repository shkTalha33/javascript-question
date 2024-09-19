const newStr = (str) => {
    return str.trim().indexOf("New! ") === 0 ? str.trim() : `New! ${str.trim()}`
}

console.log(newStr("   New! Offer"));
console.log(newStr("Opening"));