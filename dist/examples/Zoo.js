define(["require", "exports"], function (require, exports) {
    /**
     * Some interfaces that will be mocked in tests.
     */
    var Main;
    (function (Main) {
        (function (AnimalCategory) {
            AnimalCategory[AnimalCategory["Reptiles"] = 0] = "Reptiles";
            AnimalCategory[AnimalCategory["BugsAndSpiders"] = 1] = "BugsAndSpiders";
            AnimalCategory[AnimalCategory["BigHairyBeasts"] = 2] = "BigHairyBeasts";
            AnimalCategory[AnimalCategory["FishAndThatSortOfThing"] = 3] = "FishAndThatSortOfThing";
        })(Main.AnimalCategory || (Main.AnimalCategory = {}));
        var AnimalCategory = Main.AnimalCategory;
    })(Main || (Main = {}));
    return Main;
});
