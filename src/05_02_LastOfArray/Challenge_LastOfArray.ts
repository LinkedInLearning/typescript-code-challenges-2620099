export type GetLast<T extends readonly any[]> = T extends readonly [infer First]
  ? First
  : T extends readonly [infer _, ...infer Rest]
  ? GetLast<Rest>
  : never;

const MyArray = ["hallo", "welt"] as const;
type Last = GetLast<typeof MyArray>;

/**
 * is this an alternative?
 * 
 * function tail(arg) {
  const [_, ...result] = arg;
  return result;
}

or this
function tail<T extends any[]>(arr: readonly [any, ...T]) {
  const [_ignored, ...rest] = arr;
  return rest;
}
 */

const Last: GetLast<typeof MyArray> = "welt";
