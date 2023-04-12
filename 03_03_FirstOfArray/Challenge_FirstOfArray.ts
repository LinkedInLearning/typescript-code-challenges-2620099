// Level 3, TS 5 hint

// let readonlyArray: ReadonlyArray<number> = [1, 2, 3] as const;


let inputArray = [1, 2, 3] ;

const getFirst = <const T extends readonly any[]>(input: T): T[0] => {
  return input[0];
};

const f = getFirst(inputArray);
