const NumberButString = "120" as const;

// conditional type -> extends, infer, number
type Number120 = typeof NumberButString extends `${infer U extends number}`
  ? U
  : never;

export const asNumber: Number120 = 120;
