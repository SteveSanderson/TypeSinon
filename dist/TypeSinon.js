/// <reference path="sinon.d.ts" />
var TypeSinon;
(function (TypeSinon) {
    "use strict";
    function spy(objOrFunc, method) {
        return method ? spyOnMethod(objOrFunc, method) : spyOnFunc(objOrFunc);
    }
    TypeSinon.spy = spy;
    function spyOnFunc(fn) {
        var spy = sinon.spy(fn), capturedFunc = spy;
        capturedFunc.fn = spy;
        return capturedFunc;
    }
    function spyOnMethod(obj, method) {
        for (var key in obj) {
            if (obj[key] === method) {
                return (obj[key] = spyOnFunc(method));
            }
        }
        throw new Error("Method found on object.\nMethod: " + method + "\nObject: " + obj);
    }
})(TypeSinon || (TypeSinon = {}));
