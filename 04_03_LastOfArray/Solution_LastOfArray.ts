export type GetLast<T extends readonly any[]> = T extends readonly [
  ...any,
  infer U
]
  ? U
  : never;

const MyArray = ["hallo", "linkedin", "welt"] as const;

export const Last: GetLast<typeof MyArray> = "welt";
