/// <reference path="sinon.d.ts" />
/// <amd-dependency path="sinon" />
export = Main;

module Main {
    export function func<TFunc>(fn?: TFunc): CapturedFunc<TFunc> {
        var spy = sinon.spy(fn),
            capturedFunc = <CapturedFunc<TFunc>>spy;
        capturedFunc.fn = <any>spy;
        return capturedFunc;
    }

    export function objMethod<TFunc>(obj: any, method: string): CapturedFunc<TFunc> {
        var spy = sinon.spy(obj, method),
            capturedFunc = <CapturedFunc<TFunc>>spy;
        capturedFunc.fn = <any>spy;
        return capturedFunc;
    }

    export interface CapturedFunc<TFunc> extends SinonSpy {
        fn: TFunc;
    }
}
