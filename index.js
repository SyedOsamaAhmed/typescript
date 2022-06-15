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
//# sourceMappingURL=index.js.map