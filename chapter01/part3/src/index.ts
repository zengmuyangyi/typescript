import { hi } from "./m1";
function sum(a: number, b: number):number {
    return a + b
}
const obj = {name: '孙悟空', age: 13}
console.log(obj);
obj.age = 18
console.log(obj);

console.log(sum(123, 456));
console.log(sum(789, 111));
console.log(hi);

console.log(Promise);
