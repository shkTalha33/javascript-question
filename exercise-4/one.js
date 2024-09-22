const isLeapYear = (year) => {
    return year % 4 === 0 ? "Leap Year" : "Not Leap Year"
}

console.log(isLeapYear(2024));