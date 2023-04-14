export function getNamesExactly<const T extends readonly any[]>(arg: T): T {
  return arg;
}

const namesInput = ["Eve", "Alice"] as const;

const names = getNamesExactly(namesInput);
const names2 = getNamesExactly(["Bob", "Steve"]);
