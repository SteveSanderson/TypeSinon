/// <reference path="../TypeSinon.d.ts" />
/// <reference path="Zoo.d.ts" />
/// <reference path="Staff.d.ts" />
declare var mockFeedAnimals: TypeSinon.CapturedFunc<(name: string) => void>, mockGetAnimals: TypeSinon.CapturedFunc<(category: Zoo.AnimalCategory) => Zoo.Animal[]>;
declare var mockBeginSelfDestruct: TypeSinon.CapturedFunc<(string: any) => void>;
declare var mockZooService: Zoo.ZooService;
declare var harold: Staff.Employee;
