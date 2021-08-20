function numberChecking(number1, number2) {
    if (number1 > 100) {
        console.log("Number1 has many digits!");

    }
    if (number1 < 0) {
        console.log("Number1 is a negative number.");
    }
    if (number2 < 20) {
        console.log("Number2 is not a very high number.");
    }
    if (number2 > 50) {
        console.log("Number2 is a high number.")
    }

}
numberChecking(123,19);