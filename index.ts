let sales = 123_456 - 789;
let course = "TypeScript";
let is_pulished = true;

/*Any type in transcript allows us to declare that var of any type and then change it but that will defeat purpose of typescript type checking feature */
let level;
level = 1;
level = "abc";

//Arrays

/*Any type arrays mean we can declare an array with different datatypes */
let numbers: any = [];
numbers[0] = 1;
numbers[1] = "a";

let number: number[];

//Tuples: It is fixed length array of exactly two elements of particular type.
let user: [number, string] = [1, "Mosh"];

//Enums:represent list of related constants:
//starting alphabet is capital in PascalCase.
enum Size {
  small = 1,
  medium,
  large,
}
let mysize: Size = Size.medium;
console.log(mysize);

//functions:
//passing taxYear as optional argument but it can be undefined so to cater this we pass the default value if no value provided
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2;

  return income * 1.3;
}

calculateTax(50_000);

//Objects:

//Type Alliases:
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};
let employee: Employee = {
  id: 1,
  name: "",
  retire: (date: Date) => {
    console.log(date);
  },
};
//Readonly property of object does not allow to change its value

//Union types: when assigning parameter multiple types

function kgtoLbs(weight: number | string): number {
  //Narrowing technique: It is technique used in union types because compiler does not know whether variable or function param is number or string

  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 3.3;
}

kgtoLbs(10);
kgtoLbs("18");

//intersection type:

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};
