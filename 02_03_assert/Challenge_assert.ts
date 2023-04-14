import { strict as assert } from "node:assert";
import { getValueFromServer } from "./util-getValueFromServer";

let myNumber = getValueFromServer();

// assert(typeof myNumber === "number", "error -> value is not a number");

type MyType = typeof myNumber;
