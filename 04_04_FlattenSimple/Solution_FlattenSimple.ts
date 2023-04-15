const arr = ["TypeScript", "ist", "mächtig", "💪"] as const;
// -> TypeScript ist mächtig 💪

export type FlattenStringArray<T extends readonly any[]> = T extends readonly [
  infer First,
  ...infer Rest
]
  ? First extends string
    ? `${First} ${FlattenStringArray<Rest>}`
    : ""
  : "";

type Flattened = FlattenStringArray<typeof arr>;
