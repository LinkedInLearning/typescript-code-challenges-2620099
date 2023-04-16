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

/// -----
export type ArrayLength<A extends readonly any[]> = A["length"];
export type IsSquareMatrix<T extends readonly number[][]> = false;

type True1 = IsSquareMatrix<[[1]]>;
type True2 = IsSquareMatrix<[[1, 3], [8, 6]]>;
type True3 = IsSquareMatrix<[[6, 1, 3], [1, 8, 6], [2, 3, 5]]>;

type False1 = IsSquareMatrix<[[1, 2]]>;
type False2 = IsSquareMatrix<[[3, 5], [9, 1, 1]]>;
type False3 = IsSquareMatrix<[[3, 5, 4], [9, 1, 1]]>;
