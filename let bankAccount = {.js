let bankAccount = {
    customerName: "John Doe",
    accountType: "savings",
    balance: 1000.00,
    dateOfCreation: "2023-01-01",
    bankName: "Main Branch", 
    panCardNumber: "ABCDE1234F"
};

console.log("Bank Account Details:");
for (let key in bankAccount) {
    console.log(${key}: ${bankAccount[key]});
}

let keyToCheck = "balance";
if (keyToCheck in bankAccount) {
    console.log(Key ${keyToCheck} exists in the bank account object.);
} else {
    console.log(Key ${keyToCheck} does not exist in the bank account object.);
}

let keyToGet = "bankName";
if (keyToGet in bankAccount) {
    let value = bankAccount[keyToGet];
    console.log(Value for key ${keyToGet}: ${value});
} else {
    console.log(Key ${keyToGet} not found in the bank account object.);
}











