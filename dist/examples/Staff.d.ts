import Zoo = require("Zoo");
export = Main;
declare module Main {
    /**
     * A class that can be tested.
     */
    class Employee {
        private _zooService;
        private _areaOfResponsibility;
        constructor(zooService: Zoo.ZooService, responsibleFor: Zoo.AnimalCategory);
        performDuties(): void;
    }
}
