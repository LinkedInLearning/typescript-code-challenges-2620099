class Animal {
  constructor(name: string, type: string) {
    console.log("Neues Tier erzeugt mit Name=", name, " und Typ=", type);
  }
}

const animal = new Animal("Max", "Dog");

const getAnimalName = (animal: Animal): string => animal.name;
const getAnimalType = (animal: Animal): string => animal.type;

console.log("Tiername:", getAnimalName(animal));
console.log("Tiertyp:", getAnimalType(animal));

export {};
