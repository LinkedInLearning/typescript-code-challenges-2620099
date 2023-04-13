const personDefinition = {
  name: "David",
  age: 2000,
  gender: "male",
};

const personExtension = {
  hobbies: ["Klettern"],
};

type WantedType = Pick<typeof personDefinition, "name"> &
  Partial<Pick<typeof personExtension, "hobbies">>;

const MyNewObject: WantedType = {
  name: "David",
  hobbies: ["hobby1"],
};

export {};
