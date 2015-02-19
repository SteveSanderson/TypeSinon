/**
 * Some interfaces that will be mocked in tests.
 */
var Zoo;
(function (Zoo) {
    (function (AnimalCategory) {
        AnimalCategory[AnimalCategory["Reptiles"] = 0] = "Reptiles";
        AnimalCategory[AnimalCategory["BugsAndSpiders"] = 1] = "BugsAndSpiders";
        AnimalCategory[AnimalCategory["BigHairyBeasts"] = 2] = "BigHairyBeasts";
        AnimalCategory[AnimalCategory["FishAndThatSortOfThing"] = 3] = "FishAndThatSortOfThing";
    })(Zoo.AnimalCategory || (Zoo.AnimalCategory = {}));
    var AnimalCategory = Zoo.AnimalCategory;
})(Zoo || (Zoo = {}));
