type Birds = {
  name: "Eagle" | "Pigeon" | "Duck";
  wingspan: number;
  legs: 2;
};

type Sharks = {
  name: "Great White" | "Hammerhead" | "Tiger";
  length: number;
  legs: 0;
};

type Dogs = {
  name: "Labrador" | "Poodle" | "Bulldog";
  height: number;
  legs: 4;
};

type OurAnimals = Birds | Sharks | Dogs;

type OurAnimalsWith4Legs = Exclude<OurAnimals, { legs: 0 | 2 }>;
