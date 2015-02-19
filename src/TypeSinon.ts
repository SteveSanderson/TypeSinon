/// <reference path="sinon.d.ts" />

module TypeSinon {
    export function func<TFunc>(fn?: TFunc): CapturedFunc<TFunc> {
        var spy = sinon.spy(fn),
            capturedFunc = <CapturedFunc<TFunc>>spy;
        capturedFunc.fn = <any>spy;
        return capturedFunc;
    }

    export function wrapMethod<TFunc extends Function>(obj: any, method: TFunc): CapturedFunc<TFunc> {
        // Find the function and wrap it
        for (var key in obj) {
            if (obj[key] === method) {
                return (obj[key] = func(method));
            }
        }

        throw new Error("Method found on object.\nMethod: " + method + "\nObject: " + obj);
    }

    export interface CapturedFunc<TFunc> extends SinonSpy {
        fn: TFunc;
    }
}