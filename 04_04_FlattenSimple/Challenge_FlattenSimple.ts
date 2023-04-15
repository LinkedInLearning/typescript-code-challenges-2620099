const textArray = ["TypeScript", "ist", "mächtig", "💪"] as const;
// -> TypeScript ist mächtig 💪

export type ArrayToString<T extends readonly any[]> = "ergebnis";

type Sentence = ArrayToString<typeof textArray>;
