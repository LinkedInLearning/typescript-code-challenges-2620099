import { TrimRight } from "../04_02_TrimRight/Solution_TrimRight";

const textArray = ["TypeScript", "ist", "mächtig", "💪"] as const;

export type JoinToString<T extends readonly any[]> = "";

// JoinToString --> "TypeScript ist mächtig 💪 " (mit Leerzeichen am Ende)
// + TrimRight --> "TypeScript ist mächtig 💪" (ohne Leerzeichen am Ende)
type Sentence = TrimRight<JoinToString<typeof textArray>>;
