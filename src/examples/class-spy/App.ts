
module App {
    /**
     * A class that can be tested.
     */
    export class Engine {
        private _state: string;

        constructor(initialState?: string) {
            this._state = initialState || "stopped";
        }

        public pressPowerButton(): void {
            if (this._state === "stopped") {
                this.start();
            } else if (this._state === "started") {
                this.stop();
            } else {
                throw new Error("Invalid state: " + this._state);
            }
        }

        public start(): void {
            this._state = "started";
        }

        public stop(): void {
            this._state = "stopped";
        }

        public getState(): string {
            return this._state;
        }
    }
}