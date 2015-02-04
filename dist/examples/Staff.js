define(["require", "exports"], function (require, exports) {
    var Main;
    (function (Main) {
        /**
         * A class that can be tested.
         */
        var Employee = (function () {
            function Employee(zooService, responsibleFor) {
                this._zooService = zooService;
                this._areaOfResponsibility = responsibleFor;
            }
            Employee.prototype.performDuties = function () {
                var _this = this;
                var myAnimals = this._zooService.getAnimals(this._areaOfResponsibility);
                myAnimals.forEach(function (animal) {
                    _this._zooService.feedAnimalByName(animal.name);
                });
            };
            return Employee;
        })();
        Main.Employee = Employee;
    })(Main || (Main = {}));
    return Main;
});
