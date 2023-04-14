function inputTypeIsOutputType(input: string | number) {
  return input;
}

const shouldBeANumber = inputTypeIsOutputType(1);
const calculation = shouldBeANumber + 1;

const shouldBeAString = inputTypeIsOutputType("test");
const strLength = shouldBeAString.length;

export {};
