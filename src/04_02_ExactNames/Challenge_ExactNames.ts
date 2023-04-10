// Level 3, TS 5 hint
// challenge
export function getNamesExactly<T extends any[]>(arg: T): T {
    return arg;
  }
  
  const names = getNamesExactly(["Alice", "Bob", "Eve"]);
  

//--------
type HasNames = readonly string[];
export function getNamesExactly<const T extends HasNames>(arg: T): T {
    return arg;
}

// Inferred type: readonly ["Alice", "Bob", "Eve"]
// Note: Didn't need to write 'as const' here
const names = getNamesExactly( ["Alice", "Bob", "Eve"] );