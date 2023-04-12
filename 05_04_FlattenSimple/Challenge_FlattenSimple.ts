const arr = ["eins", "zwei", "drei", "tausend 💪"] as const;

export type FlattenStringArray<T extends readonly any[]> = T extends readonly [
  infer First,
  ...infer Rest
]
  ? First extends string
    ? `${First}${FlattenStringArray<Rest>}`
    : ""
  : "";

type Flattened = FlattenStringArray<typeof arr>;
