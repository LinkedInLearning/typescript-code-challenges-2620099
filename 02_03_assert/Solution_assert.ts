// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions
// https://www.typescriptlang.org/static/TypeScript%20Control%20Flow%20Analysis-8a549253ad8470850b77c4c5c351d457.png
import { strict as assert } from "node:assert";
import { getValueFromServer } from "./util-getValueFromServer";

let myNumber = getValueFromServer();

// assert(typeof myNumber === "number", "error -> value is not a number");

function myAssert(input: any): asserts input is number {
  if (typeof input !== "number") {
    throw new Error("Type not a number");
  }
}

myAssert(myNumber);

type MyType = typeof myNumber;
