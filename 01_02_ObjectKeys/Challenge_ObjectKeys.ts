const personDefinition = {
  name: "David",
  age: 2000,
  gender: "male",
};

const personExtension = {
  hobbies: ["Klettern"],
};

type WantedType = {
  name: string;
  hobbies?: string[];
};

export {};
