/// <reference path="sinon.d.ts" />
export = Main;
declare module Main {
    function func<TFunc>(fn?: TFunc): CapturedFunc<TFunc>;
    function wrapMethod<TFunc extends Function>(obj: any, method: TFunc): CapturedFunc<TFunc>;
    interface CapturedFunc<TFunc> extends SinonSpy {
        fn: TFunc;
    }
}
