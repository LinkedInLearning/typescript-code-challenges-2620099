interface MyPersonInterface {
  name: string;
}

// KEIN extend, KEIN &

const Person: MyPersonInterface = {
  name: "Danny",
  age: 32,
};

export {}
