/// <reference path="../TypeSinon.ts" />
/// <reference path="Zoo.ts" />
/// <reference path="Staff.ts" />
// You can create function mocks that explicitly contain 'return' logic,
// which implicitly strongly-types the mock to those params and return value types.
var mockFeedAnimals = TypeSinon.spy(function (name) {
}), mockGetAnimals = TypeSinon.spy(function (category) {
    if (category == 0 /* Reptiles */) {
        return [{ name: "Godzilla" }, { name: "T-Rex" }];
    }
    else {
        throw new Error("Should not ask about other categories");
    }
});
// ... or you can just specify the signature with generics without giving an implementation.
// If you call it, it will return 'undefined'.
var mockBeginSelfDestruct = TypeSinon.spy();
// Now you can use the function mocks to implement an interface
var mockZooService = {
    feedAnimalByName: mockFeedAnimals.fn,
    getAnimals: mockGetAnimals.fn,
    beginSelfDestructSequence: mockBeginSelfDestruct.fn,
    // All interface members have to be specified, but they don't
    // have to be mocked if you won't be calling them anyway.
    someIrrelevantInterfaceMember: null
};
// Then use your mock in tests
var harold = new Staff.Employee(mockZooService, 0 /* Reptiles */);
harold.performDuties();
// Now you can use all the facilities provided by Sinon to make assertions
// about the method invocations. For example, 'args' gives the array-of-arrays
// describing all the arguments passed...
console.log("Animals fed: " + mockFeedAnimals.args);
// ... and 'called' just gives a bool to say whether the func was invoked at all.
console.log("Will the zoo self-destruct? " + mockBeginSelfDestruct.called);
