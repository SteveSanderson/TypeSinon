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
        throw new Error("Method not found on object.\nMethod: " + method + "\nObject: " + obj);
    }
    function stub(obj, method, fn) {
        if (obj && method) {
            for (var key in obj) {
                if (obj[key] === method) {
                    return sinon.stub(obj, key, fn);
                }
            }
            throw new Error("Method not found on object.\nMethod: " + method + "\nObject: " + obj);
        }
        else {
            return sinon.stub(obj);
        }
    }
    TypeSinon.stub = stub;
})(TypeSinon || (TypeSinon = {}));
