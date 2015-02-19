/// <reference path="sinon.d.ts" />

module TypeSinon {
    "use strict";

    export function spy<TFunc>(fn?: TFunc): CapturedFunc<TFunc>;
    export function spy<TFunc>(obj: any, method: TFunc): CapturedFunc<TFunc>;
    export function spy<TFunc>(objOrFunc?: any, method?: any): CapturedFunc<TFunc> {
        return method ? spyOnMethod(objOrFunc, method) : spyOnFunc(objOrFunc);
    }

    function spyOnFunc<TFunc>(fn?: TFunc): CapturedFunc<TFunc> {
        var spy = sinon.spy(fn),
            capturedFunc = <CapturedFunc<TFunc>>spy;
        capturedFunc.fn = <any>spy;
        return capturedFunc;
    }

    function spyOnMethod<TFunc extends Function>(obj: any, method: TFunc): CapturedFunc<TFunc> {
        // Find the function and wrap it
        for (var key in obj) {
            if (obj[key] === method) {
                return (obj[key] = spyOnFunc(method));
            }
        }

        throw new Error("Method found on object.\nMethod: " + method + "\nObject: " + obj);
    }

    export interface CapturedFunc<TFunc> extends SinonSpy {
        fn: TFunc;
    }
}