export = Main;
/**
 * Some interfaces that will be mocked in tests.
 */
declare module Main {
    interface Animal {
        name: string;
    }
    enum AnimalCategory {
        Reptiles = 0,
        BugsAndSpiders = 1,
        BigHairyBeasts = 2,
        FishAndThatSortOfThing = 3,
    }
    interface ZooService {
        getAnimals(category: AnimalCategory): Animal[];
        feedAnimalByName(name: string): void;
        beginSelfDestructSequence(reason: string): any;
        someIrrelevantInterfaceMember: any;
    }
}
