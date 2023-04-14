export function getNamesExactly<T extends any[]>(arg: T): T {
  return arg;
}

const namesInput = ["Eve", "Alice"];

const names = getNamesExactly(namesInput);
const names2 = getNamesExactly(["Bob", "Steve"]);
