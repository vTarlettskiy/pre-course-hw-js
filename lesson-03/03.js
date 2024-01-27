const fruits = ["яблоко", "банан", "апельсин", "манго", "киви", "ананас", "виноград", "груша", "слива", "персик"];

function sliceFruits(arr) {
    return arr.slice(0, -2)
}

console.log(sliceFruits(fruits));