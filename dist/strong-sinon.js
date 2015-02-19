define(["require", "exports", "sinon"], function (require, exports) {
    var Main;
    (function (Main) {
        function func(fn) {
            var spy = sinon.spy(fn), capturedFunc = spy;
            capturedFunc.fn = spy;
            return capturedFunc;
        }
        Main.func = func;
        function wrapMethod(obj, method) {
            for (var key in obj) {
                if (obj[key] === method) {
                    return (obj[key] = func(method));
                }
            }
            throw new Error("Method found on object.\nMethod: " + method + "\nObject: " + obj);
        }
        Main.wrapMethod = wrapMethod;
    })(Main || (Main = {}));
    return Main;
});
