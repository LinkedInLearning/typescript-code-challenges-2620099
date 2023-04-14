interface MyPersonInterface {
  name: string;
}

// KEIN extend, KEIN &
interface MyPersonInterface {
  age: number;
}

const Person: MyPersonInterface = {
  name: "Danny",
  age: 32,
};
