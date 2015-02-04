export = Main;

/**
 * Some interfaces that will be mocked in tests.
 */
module Main {
    export interface Animal {
        name: string;
    }

    export enum AnimalCategory {
        Reptiles,
        BugsAndSpiders,
        BigHairyBeasts,
        FishAndThatSortOfThing
    }

    export interface ZooService {
        getAnimals(category: AnimalCategory): Animal[];
        feedAnimalByName(name: string): void;
        beginSelfDestructSequence(reason: string);
        someIrrelevantInterfaceMember: any;
    }
}