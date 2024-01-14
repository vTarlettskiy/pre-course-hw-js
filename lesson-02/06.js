let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let clone2 = structuredClone(passportWithAddress);

clone2.address.city = 'Bobryisk';

console.log(passportWithAddress.address.city)
console.log(clone2.address.city)