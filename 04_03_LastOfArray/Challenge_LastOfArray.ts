export type GetLast<T extends readonly any[]> = T;

const MyArray = ["hallo", "linkedin", "welt"] as const;

export const Last: GetLast<typeof MyArray> = "welt";
