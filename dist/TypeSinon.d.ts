/// <reference path="sinon.d.ts" />
declare module TypeSinon {
    function spy<TFunc>(fn?: TFunc): Spy<TFunc>;
    function spy<TFunc>(obj: any, method: TFunc): Spy<TFunc>;
    interface Spy<TFunc> extends SinonSpy {
        fn: TFunc;
    }
    function stub<TFunc>(obj?: any, method?: TFunc, fn?: TFunc): SinonStub;
}
