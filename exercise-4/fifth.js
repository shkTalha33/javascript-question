// const checkAge = (arr) => {
//     return arr.every(el => el < 50)
// } 

// console.log(checkAge([10,20,30,5,10]));
// console.log(checkAge([10,20,30,51,10]));

const checkAge = (arr, fn) => {
    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i])) {
            return false
        }
        
    }
    return true
}

console.log(checkAge([10,20,30,40,54], (x => x < 50)));
console.log(checkAge([10,20,30,40,20], (x => x < 50)));