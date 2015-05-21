var App;
(function (App) {
    /**
     * A class that can be tested.
     */
    var Engine = (function () {
        function Engine(initialState) {
            this._state = initialState || "stopped";
        }
        Engine.prototype.pressPowerButton = function () {
            if (this._state === "stopped") {
                this.start();
            }
            else if (this._state === "started") {
                this.stop();
            }
            else {
                throw new Error("Invalid state: " + this._state);
            }
        };
        Engine.prototype.start = function () {
            this._state = "started";
        };
        Engine.prototype.stop = function () {
            this._state = "stopped";
        };
        Engine.prototype.getState = function () {
            return this._state;
        };
        return Engine;
    })();
    App.Engine = Engine;
})(App || (App = {}));
