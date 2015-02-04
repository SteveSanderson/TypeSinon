import capture = require("../strong-sinon");
import Zoo = require("Zoo");
import Staff = require("Staff");

// You can create function mocks that explicitly contain 'return' logic,
// which implicitly strongly-types the mock to those params and return value types.
var mockFeedAnimals = capture.func((name: string) => { /* no code, so return type is void */ }),
    mockGetAnimals = capture.func((category: Zoo.AnimalCategory): Zoo.Animal[]=> {
        if (category == Zoo.AnimalCategory.Reptiles) {
            return [{ name: "Godzilla" }, { name: "T-Rex" }];
        } else {
            throw new Error("Should not ask about other categories");
        }
    });

// ... or you can just specify the signature with generics without giving an implementation.
// If you call it, it will return 'undefined'.
var mockBeginSelfDestruct = capture.func<(string) => void>();

// Now you can use the function mocks to implement an interface
var mockZooService: Zoo.ZooService = {
    feedAnimalByName: mockFeedAnimals.fn,
    getAnimals: mockGetAnimals.fn,
    beginSelfDestructSequence: mockBeginSelfDestruct.fn,

    // All interface members have to be specified, but they don't
    // have to be mocked if you won't be calling them anyway.
    someIrrelevantInterfaceMember: null
};

// Then use your mock in tests
var harold = new Staff.Employee(mockZooService, Zoo.AnimalCategory.Reptiles);
harold.performDuties();

// Now you can use all the facilities provided by Sinon to make assertions
// about the method invocations. For example, 'args' gives the array-of-arrays
// describing all the arguments passed...
console.log("Animals fed: " + mockFeedAnimals.args);

// ... and 'called' just gives a bool to say whether the func was invoked at all.
console.log("Will the zoo self-destruct? " + mockBeginSelfDestruct.called);
