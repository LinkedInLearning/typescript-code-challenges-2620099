// Java-Like https://www.geeksforgeeks.org/dynamic-method-dispatch-runtime-polymorphism-java/
class Person {
  static getByIdOrName(type: "id", id: number): boolean;
  static getByIdOrName(type: "name", name: string): boolean;
  static getByIdOrName(
    type: "id" | "name",
    idOrName: number | string
  ): boolean {
    return true;
  }
}

Person.getByIdOrName("id", "test"); // ❌
Person.getByIdOrName("id", 12); // ✅
Person.getByIdOrName("name", "David"); // ✅

export {};
