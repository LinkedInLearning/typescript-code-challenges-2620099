function createPromise() {
  return Promise.resolve(123);
}

const myPromise = createPromise();

type ResolvedType = any;

const valueWithSameTypeValid: ResolvedType = 43; // ✅
const valueWithSameTypeWrong: ResolvedType = "test"; // ❌

export {};
