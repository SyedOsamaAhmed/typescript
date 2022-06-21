"use strict";
let sales = 123456 - 789;
let course = "TypeScript";
let is_pulished = true;
/*Any type in transcript allows us to declare that var of any type and then change it but that will defeat purpose of typescript type checking feature */
let level;
level = 1;
level = "abc";
//Arrays
/*Any type arrays mean we can declare an array with different datatypes */
let numbers = [];
numbers[0] = 1;
numbers[1] = "a";
let number;
//Tuples: It is fixed length array of exactly two elements of particular type.
let user = [1, "Mosh"];
//Enums:represent list of related constants:
//starting alphabet is capital in PascalCase.
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["medium"] = 2] = "medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
let mysize = Size.medium;
console.log(mysize);
//functions:
//passing taxYear as optional argument but it can be undefined so to cater this we pass the default value if no value provided
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(50000);
let employee = {
    id: 1,
    name: "",
    retire: (date) => {
        console.log(date);
    },
};
//Readonly property of object does not allow to change its value
//Union types: when assigning parameter multiple types
function kgtoLbs(weight) {
    //Narrowing technique: It is technique used in union types because compiler does not know whether variable or function param is number or string
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 3.3;
}
kgtoLbs(10);
kgtoLbs("18");
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
//Nullable types:
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hi!");
}
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthdate: new Date() };
}
let customer = getCustomer(0);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthdate);
//# sourceMappingURL=index.js.map