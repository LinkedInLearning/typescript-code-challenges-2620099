function createPromise() {
  return Promise.resolve(123);
}

const myPromise = createPromise();

type ResolvedType = Awaited<typeof myPromise>;

const valueWithSameTypeValid: ResolvedType = 43; // ✅
const valueWithSameTypeWrong: ResolvedType = "test"; // ❌

export {};
