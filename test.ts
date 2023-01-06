import { add } from "./src/index";

const obj = { name: "Gotis" };

console.log("Test 1", add(obj, { age: 20 }, 20));
console.log("Test 2", add(obj, "job", "programming"));
