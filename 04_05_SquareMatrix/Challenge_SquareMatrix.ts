export type ArrayLength<A extends readonly any[]> = A["length"];

type HasLength<
  A extends readonly any[],
  L extends number
> = ArrayLength<A> extends L ? true : false;

type HaveAllSameLength<
  A extends readonly any[][],
  L extends number
> = A extends [
  infer U extends readonly any[],
  ...infer R extends readonly any[][]
]
  ? HasLength<U, L> extends true
    ? HaveAllSameLength<R, L>
    : false
  : true;

type Test = HaveAllSameLength<[[1, 2], [3, 3, 4]], 2>;

export type IsSquareMatrix<T extends readonly number[][]> = HaveAllSameLength<
  T,
  ArrayLength<T>
>;

type True1 = IsSquareMatrix<[[1]]>;
type True2 = IsSquareMatrix<[[1, 3], [8, 6]]>;
type True3 = IsSquareMatrix<[[6, 1, 3], [1, 8, 6], [2, 3, 5]]>;

type False1 = IsSquareMatrix<[[1, 2]]>;
type False2 = IsSquareMatrix<[[3, 5], [9, 1, 1]]>;
type False3 = IsSquareMatrix<[[3, 5, 4], [9, 1, 1]]>;
