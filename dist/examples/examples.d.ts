/// <reference path="../TypeSinon.d.ts" />
/// <reference path="Zoo.d.ts" />
/// <reference path="Staff.d.ts" />
declare var mockFeedAnimals: TypeSinon.Spy<(name: string) => void>, mockGetAnimals: TypeSinon.Spy<(category: Zoo.AnimalCategory) => Zoo.Animal[]>;
declare var mockBeginSelfDestruct: TypeSinon.Spy<(string: any) => void>;
declare var mockZooService: Zoo.ZooService;
declare var harold: Staff.Employee;
