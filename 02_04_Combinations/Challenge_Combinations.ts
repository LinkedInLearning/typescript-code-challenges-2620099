class IceCream {
  constructor(public id: number, public name: string) {}
}

class IceCreamDatabase {
  static db = [
    new IceCream(5, "Chocolate"),
    new IceCream(34, "Blueberry"),
    new IceCream(9, "Strawberry Choc"),
  ];

  static getByIdOrName(type: "id" | "name", idOrName: number | string) {
    if (type === "id") {
      return IceCreamDatabase.db.find((ic) => ic.id === idOrName);
    } else {
      return IceCreamDatabase.db.find((ic) => ic.name === idOrName);
    }
  }
}

IceCreamDatabase.getByIdOrName("id", "test"); // ❌
IceCreamDatabase.getByIdOrName("id", 12); // ✅
IceCreamDatabase.getByIdOrName("name", "David"); // ✅

export {};
