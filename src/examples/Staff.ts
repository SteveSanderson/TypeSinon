import Zoo = require("Zoo");

export = Main;

module Main {
    /**
     * A class that can be tested.
     */
    export class Employee {
        private _zooService: Zoo.ZooService;
        private _areaOfResponsibility: Zoo.AnimalCategory;

        constructor(zooService: Zoo.ZooService, responsibleFor: Zoo.AnimalCategory) {
            this._zooService = zooService;
            this._areaOfResponsibility = responsibleFor;
        }

        public performDuties(): void {
            var myAnimals = this._zooService.getAnimals(this._areaOfResponsibility);
            myAnimals.forEach((animal) => {
                this._zooService.feedAnimalByName(animal.name);
            });
        }
    }
}