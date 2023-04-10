// Level 2

// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions
// https://www.typescriptlang.org/static/TypeScript%20Control%20Flow%20Analysis-8a549253ad8470850b77c4c5c351d457.png
import { strict as assert } from "node:assert";
let myNumber: any = 3;

if (typeof myNumber === "number") {
  const typescriptKnowsNumber = myNumber;
}

assert(myNumber, "throw");
