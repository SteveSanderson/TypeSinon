/// <reference path="sinon.d.ts" />

module TypeSinon {
    "use strict";

    export function spy<TFunc>(fn?: TFunc): Spy<TFunc>;
    export function spy<TFunc>(obj: any, method: TFunc): Spy<TFunc>;
    export function spy<TFunc>(objOrFunc?: any, method?: any): Spy<TFunc> {
        return method ? spyOnMethod(objOrFunc, method) : spyOnFunc(objOrFunc);
    }

    function spyOnFunc<TFunc>(fn?: TFunc): Spy<TFunc> {
        var spy = sinon.spy(fn),
            capturedFunc = <Spy<TFunc>>spy;
        capturedFunc.fn = <any>spy;
        return capturedFunc;
    }

    function spyOnMethod<TFunc extends Function>(obj: any, method: TFunc): Spy<TFunc> {
        // Find the function and wrap it
        for (var key in obj) {
            if (obj[key] === method) {
                return (obj[key] = spyOnFunc(method));
            }
        }

        throw new Error("Method found on object.\nMethod: " + method + "\nObject: " + obj);
    }

    export interface Spy<TFunc> extends SinonSpy {
        fn: TFunc;
    }
}