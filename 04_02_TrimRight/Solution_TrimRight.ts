export type TrimRight<T extends string> = T extends `${infer U extends string} `
  ? TrimRight<U>
  : T;

type Trimmed = TrimRight<" Hello World   ">;

// -------------------------------
type WunschTyp = " Hello World";

export {};
