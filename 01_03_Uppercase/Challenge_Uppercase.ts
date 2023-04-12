type UppercaseStrings = any;

// komplexe Lösung möglich, aber nicht notwendig

export const Output = (s: UppercaseStrings) => {
  console.log(s);
};

Output("sabrina"); // ❌
Output("mark"); // ❌
Output(" Jessy"); // ❌
Output("Jess"); // ✅
Output("David"); // ✅

type CharacterString = Exclude<string, " " | "-">;
