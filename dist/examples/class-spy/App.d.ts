declare module App {
    /**
     * A class that can be tested.
     */
    class Engine {
        private _state;
        constructor(initialState?: string);
        pressPowerButton(): void;
        start(): void;
        stop(): void;
        getState(): string;
    }
}
