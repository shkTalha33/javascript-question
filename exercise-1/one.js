const checkTwoNumber = (num1,num2) => {
    if (num1 === 100 || num2 === 100 || num1 + num2 === 100){
        console.log("Condition satisfy");
    } else {
        console.log("Condition not satisfy");
    }
}

checkTwoNumber(30,90)
checkTwoNumber(50,50)
checkTwoNumber(10,90)