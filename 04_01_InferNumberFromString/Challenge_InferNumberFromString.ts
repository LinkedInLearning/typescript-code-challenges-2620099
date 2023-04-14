const NumberButString = "120" as const;

type Number120 = typeof NumberButString;

export const asNumber: Number120 = 120;
