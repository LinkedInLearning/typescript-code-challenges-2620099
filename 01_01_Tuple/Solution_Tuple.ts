// Step 1:
type XYTuple = [number, number];

const XY: XYTuple = [12, 39];
const XY_Wrong: XYTuple = [12, 39, 20];

// Step 2:
type NameAgeHobbyTuple = [string, number, string, ...string[]];
const NameAgeHobby: NameAgeHobbyTuple = ["Anny", 25, "Surfing", "Gaming"];
const NameAgeHobby_Wrong: NameAgeHobbyTuple = ["Anny", 25];
const NameAgeHobby_Wrong2: NameAgeHobbyTuple = ["Anny", 25, 30];

export {};
