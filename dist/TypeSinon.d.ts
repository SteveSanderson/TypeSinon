/// <reference path="sinon.d.ts" />
declare module TypeSinon {
    function spy<TFunc>(fn?: TFunc): CapturedFunc<TFunc>;
    function spy<TFunc>(obj: any, method: TFunc): CapturedFunc<TFunc>;
    interface CapturedFunc<TFunc> extends SinonSpy {
        fn: TFunc;
    }
}
