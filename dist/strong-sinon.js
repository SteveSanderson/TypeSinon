define(["require", "exports", "sinon"], function (require, exports) {
    var Main;
    (function (Main) {
        function func(fn) {
            var spy = sinon.spy(fn), capturedFunc = spy;
            capturedFunc.fn = spy;
            return capturedFunc;
        }
        Main.func = func;
    })(Main || (Main = {}));
    return Main;
});
