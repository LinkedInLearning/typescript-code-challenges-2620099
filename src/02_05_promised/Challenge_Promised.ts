function createNumberPromise() {
  return Promise.resolve(123);
}

const myPromise = createNumberPromise();

type ResolvedType = any; // -> number abgeleitet von `const myPromise`

const beliebigeZahl: ResolvedType = 3;

export {};
