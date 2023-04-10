export type OddValues<T extends readonly any[]> = T extends readonly [infer Even, infer Odd, ...infer Rest] ?
 [Odd, ...OddValues<Rest>] : [];

 const Nosy = [1,2,3,4,5] as const;
//  type Resolved = OddValues<typeof Nosy>;


const getOddValues = <const T extends readonly any[], R extends OddValues<T>>(input: T): R => {
    return input.filter((item, idx) => idx % 2 === 1) as R;
}


const res = getOddValues(Nosy);