const words = ["яблоко", "банан", "апельсин", "манго", "киви"];

function findAnOrange(arr) {
    return arr.indexOf("апельсин") !== -1 ? console.log("Ура! нашел") : console.log("Придется поискать в другом магазине…")
}

findAnOrange(words);