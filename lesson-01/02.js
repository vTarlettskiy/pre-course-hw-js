// code

evenOrOdd();
function evenOrOdd() {
    let number1 = Math.floor(Math.random() * 100)
    if (number1 % 2 === 0) {
        console.log(`${number1} :Это четное число`)
    } else {
        console.log(`${number1} :Это нетное число`)
    }
}