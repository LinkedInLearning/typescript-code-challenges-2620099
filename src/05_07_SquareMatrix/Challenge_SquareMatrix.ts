export type CountLength<A extends readonly any[]> = A["length"];

// const f = "12";
type U = CountLength<[1, 2]>;

type Two2<T extends readonly any[], Count = 0> = CountLength<T> extends 2
  ? T
  : never;

type Two<T extends readonly any[]> = T extends readonly [
  infer First,
  ...infer Tail
]
  ? First extends readonly any[]
    ? Tail extends readonly any[]
      ? CountLength<First> extends CountLength<T>
        ? CountLength<Tail> extends 0
          ? T
          : Two<[Tail]> extends any[]
          ? T
          : never
        : never
      : never
    : never
  : never;

const equalArray = [
  [1, 2, 3, 1],
  [4, 5, 7, 1],
  [4, 5, 7, 1],
  [4, 5, 7, 1],
] as const;

type Uff = Two<typeof equalArray>;
